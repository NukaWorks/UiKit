(function () {
    'use strict';

    function open(id) {
        const el = document.getElementById(id);
        if (!el) return;
        el.classList.add('open');
        el.removeAttribute('aria-hidden');
        document.body.style.overflow = 'hidden';
        // Focus the first focusable element inside the dialog
        requestAnimationFrame(() => {
            const focusable = el.querySelector(
                'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
            );
            focusable?.focus();
        });
    }

    function close(id) {
        const el = document.getElementById(id);
        if (!el) return;
        el.classList.remove('open');
        el.setAttribute('aria-hidden', 'true');
        // Re-enable scroll only when no other modal is open
        if (!document.querySelector('.uikit-modal-backdrop.open')) {
            document.body.style.overflow = '';
        }
    }

    function closeAll() {
        document.querySelectorAll('.uikit-modal-backdrop.open').forEach(el => close(el.id));
    }

    // Escape key support
    document.addEventListener('keydown', e => {
        if (e.key !== 'Escape') return;
        const open = document.querySelectorAll('.uikit-modal-backdrop.open');
        if (open.length) close(open[open.length - 1].id);
    });

    window.UiKitModal = { open, close, closeAll };
})();

// Dropdown
(function () {
    'use strict';

    function _menu(id) {
        const wrap = document.getElementById(id);
        return wrap ? wrap.querySelector('.uikit-dropdown-menu') : null;
    }

    function _reposition(id) {
        const wrap = document.getElementById(id);
        const menu = _menu(id);
        if (!wrap || !menu) return;

        // Reset so we can measure
        menu.style.top    = '';
        menu.style.bottom = '';

        const triggerRect = wrap.getBoundingClientRect();
        const menuHeight  = menu.offsetHeight;
        const spaceBelow  = window.innerHeight - triggerRect.bottom;
        const spaceAbove  = triggerRect.top;

        if (spaceBelow < menuHeight + 8 && spaceAbove > menuHeight + 8) {
            // Flip upward
            menu.style.top    = 'auto';
            menu.style.bottom = 'calc(100% + 4px)';
        } else {
            menu.style.top    = 'calc(100% + 4px)';
            menu.style.bottom = 'auto';
        }
    }

    function toggle(id) {
        const menu = _menu(id);
        if (!menu) return;
        const isOpen = menu.classList.contains('open');
        closeAll();
        if (!isOpen) {
            menu.classList.add('open');
            _reposition(id);
        }
    }

    function close(id) {
        const menu = _menu(id);
        menu?.classList.remove('open');
    }

    function closeAll() {
        document.querySelectorAll('.uikit-dropdown-menu.open').forEach(m => m.classList.remove('open'));
    }

    // Close when clicking outside
    document.addEventListener('click', e => {
        if (!e.target.closest('.uikit-dropdown')) closeAll();
    });

    // Close on Escape
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') closeAll();
    });

    window.UiKitDropdown = { toggle, close, closeAll };
})();

