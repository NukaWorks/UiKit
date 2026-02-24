/**
 * UiKit Table — client-side sort, search and column filtering.
 *
 * Wiring (all via data attributes — no JS required in the page):
 *
 *   Search input:
 *     <input class="uikit-table-search" data-table="TABLE_ID" />
 *
 *   Column filter select:
 *     <select class="uikit-table-filter" data-table="TABLE_ID" data-col="N" />
 *     N is 0-based column index.
 *
 *   Sortable header:
 *     <th class="uikit-th-sortable" data-sort-key="KEY"
 *         onclick="UiKitTable.sortByHeader(this)">…</th>
 *     Rows must carry <td data-value-KEY="…"> for non-text sorts (optional —
 *     falls back to textContent when data-value is absent).
 *
 * The row-count badge (element with class .uikit-table-row-count inside the
 * same .uikit-table-wrap) is updated automatically.
 */
(function () {
    'use strict';

    // ── State ────────────────────────────────────────────────────────────────
    // tableId → { sortKey, sortDir, search, filters: {colIdx: value} }
    const _state = {};

    function _getState(id) {
        if (!_state[id]) _state[id] = { sortKey: null, sortDir: 'asc', search: '', filters: {} };
        return _state[id];
    }

    // ── Helpers ──────────────────────────────────────────────────────────────

    /** Cell value for a given row + column index. */
    function _cellText(row, colIdx) {
        const cells = row.querySelectorAll('td');
        if (!cells[colIdx]) return '';
        // Prefer explicit data-value attribute for clean comparisons
        return (cells[colIdx].dataset.value ?? cells[colIdx].textContent).trim().toLowerCase();
    }

    /** Cell value for sorting — checks data-value-KEY first, then data-value on the cell, then textContent. */
    function _sortValue(row, key, colIdx) {
        const cells = row.querySelectorAll('td');
        if (!cells[colIdx]) return '';
        const cell = cells[colIdx];
        return (cell.dataset['value' + _capitalize(key)] ?? cell.dataset.value ?? cell.textContent).trim();
    }

    function _capitalize(s) { return s ? s.charAt(0).toUpperCase() + s.slice(1) : ''; }

    /** Numeric-aware compare. */
    function _compare(a, b) {
        const na = parseFloat(a), nb = parseFloat(b);
        if (!isNaN(na) && !isNaN(nb)) return na - nb;
        return a.localeCompare(b, undefined, { sensitivity: 'base' });
    }

    // ── Core render ──────────────────────────────────────────────────────────

    function _render(wrapperId) {
        const wrap = document.getElementById(wrapperId);
        if (!wrap) return;
        const tbl  = wrap.querySelector('.uikit-table');
        if (!tbl)  return;
        const tbody = tbl.querySelector('tbody');
        if (!tbody) return;

        const state = _getState(wrapperId);
        let rows = Array.from(tbody.querySelectorAll('tr:not(.uikit-table-empty-row)'));

        // ── 1. Search ──────────────────────────────────────────────────────
        const search = state.search.toLowerCase().trim();
        rows.forEach(row => {
            if (!search) { row.removeAttribute('data-hidden'); return; }
            const text = Array.from(row.querySelectorAll('td'))
                .map(td => (td.dataset.value ?? td.textContent).trim())
                .join(' ')
                .toLowerCase();
            if (text.includes(search)) row.removeAttribute('data-hidden');
            else row.setAttribute('data-hidden', '1');
        });

        // ── 2. Column filters ─────────────────────────────────────────────
        Object.entries(state.filters).forEach(([colIdx, val]) => {
            if (!val) return;
            rows.forEach(row => {
                if (row.hasAttribute('data-hidden')) return; // already hidden
                const cell = _cellText(row, parseInt(colIdx));
                if (!cell.includes(val.toLowerCase())) row.setAttribute('data-hidden', '1');
            });
        });

        // ── 3. Sort ────────────────────────────────────────────────────────
        if (state.sortKey) {
            // Find column index for this key
            const thead = tbl.querySelector('thead');
            let colIdx  = 0;
            if (thead) {
                const ths = thead.querySelectorAll('th');
                ths.forEach((th, i) => { if (th.dataset.sortKey === state.sortKey) colIdx = i; });
            }

            const visibleRows = rows.filter(r => !r.hasAttribute('data-hidden'));
            visibleRows.sort((a, b) => {
                const av = _sortValue(a, state.sortKey, colIdx);
                const bv = _sortValue(b, state.sortKey, colIdx);
                const cmp = _compare(av, bv);
                return state.sortDir === 'asc' ? cmp : -cmp;
            });
            // Re-insert in sorted order (only visible rows move; hidden stay put)
            visibleRows.forEach(r => tbody.appendChild(r));
        }

        // ── 4. Empty state ────────────────────────────────────────────────
        let emptyRow = tbody.querySelector('.uikit-table-empty-row');
        const visibleCount = rows.filter(r => !r.hasAttribute('data-hidden')).length;
        if (visibleCount === 0) {
            if (!emptyRow) {
                emptyRow = document.createElement('tr');
                emptyRow.className = 'uikit-table-empty-row';
                const colspan = tbl.querySelector('thead tr')?.querySelectorAll('th').length || 1;
                emptyRow.innerHTML = `<td colspan="${colspan}" class="uikit-table-empty">
                    <i class="material-icons">search_off</i>
                    <span>No results match your filters</span>
                </td>`;
                tbody.appendChild(emptyRow);
            }
        } else {
            emptyRow?.remove();
        }

        // ── 5. Row count ──────────────────────────────────────────────────
        const counter = wrap.querySelector('.uikit-table-row-count');
        if (counter) {
            const total = rows.length;
            counter.textContent = visibleCount === total
                ? `${total} row${total !== 1 ? 's' : ''}`
                : `${visibleCount} of ${total}`;
        }
    }

    // ── Public API ───────────────────────────────────────────────────────────

    /**
     * Called by onclick on a <th class="uikit-th-sortable">.
     * Cycles: none → asc → desc → asc …
     */
    function sortByHeader(th) {
        const wrap = th.closest('.uikit-table-wrap');
        if (!wrap) return;
        const id    = wrap.id;
        const state = _getState(id);
        const key   = th.dataset.sortKey;

        // Clear arrows on siblings
        wrap.querySelectorAll('.uikit-th-sortable').forEach(h => {
            h.removeAttribute('data-sort-dir');
            const arrow = h.querySelector('.uikit-th-arrow i');
            if (arrow) arrow.textContent = 'unfold_more';
        });

        if (state.sortKey === key && state.sortDir === 'asc') {
            state.sortDir = 'desc';
        } else {
            state.sortKey = key;
            state.sortDir = 'asc';
        }

        th.setAttribute('data-sort-dir', state.sortDir);
        const arrow = th.querySelector('.uikit-th-arrow i');
        if (arrow) arrow.textContent = state.sortDir === 'asc' ? 'arrow_upward' : 'arrow_downward';

        _render(id);
    }

    /** Wire all search inputs and filter selects inside a table wrap. */
    function init(wrapperId) {
        const wrap = document.getElementById(wrapperId);
        if (!wrap) return;

        // Search
        wrap.querySelectorAll('.uikit-table-search[data-table]').forEach(input => {
            input.addEventListener('input', () => {
                _getState(wrapperId).search = input.value;
                _render(wrapperId);
            });
        });

        // Filters
        wrap.querySelectorAll('.uikit-table-filter[data-table]').forEach(sel => {
            sel.addEventListener('change', () => {
                const col = sel.dataset.col ?? '0';
                _getState(wrapperId).filters[col] = sel.value;
                _render(wrapperId);
            });
        });

        _render(wrapperId);
    }

    /** Auto-init every .uikit-table-wrap[id] on DOMContentLoaded. */
    function autoInit() {
        document.querySelectorAll('.uikit-table-wrap[id]').forEach(wrap => init(wrap.id));
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', autoInit);
    } else {
        autoInit();
    }

    window.UiKitTable = { init, sortByHeader };
})();


