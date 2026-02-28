const STORAGE_KEY = 'uikit-theme';
const CUSTOM_KEY  = 'uikit-custom-vars';
function applyTheme(theme, customVars) {
    document.documentElement.setAttribute('data-theme', theme);
    if (theme === 'custom' && customVars) {
        for (const [k, v] of Object.entries(customVars)) {
            document.documentElement.style.setProperty(k, v);
        }
    }
}
function loadTheme() {
    const theme      = localStorage.getItem(STORAGE_KEY) || 'light';
    const customVars = JSON.parse(localStorage.getItem(CUSTOM_KEY) || '{}');
    applyTheme(theme, customVars);
    return { theme, customVars };
}
function saveTheme(theme, customVars) {
    localStorage.setItem(STORAGE_KEY, theme);
    if (customVars) localStorage.setItem(CUSTOM_KEY, JSON.stringify(customVars));
    applyTheme(theme, customVars);
}
loadTheme();
window.UiKitTheme = { loadTheme, saveTheme };
window.saveTheme  = saveTheme;
window.loadTheme  = loadTheme;

// ── App Header helpers ────────────────────────────────────────────────────
(function () {
    const THEMES = ['light', 'dark'];
    const ICONS  = { light: 'light_mode', dark: 'dark_mode' };

    function _updateIcon(theme) {
        const btn = document.getElementById('appheader-theme-btn');
        const ico = document.getElementById('appheader-theme-icon');
        if (ico) ico.textContent = ICONS[theme] || 'light_mode';
        if (btn) btn.title = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
    }

    function cycleTheme() {
        const current = localStorage.getItem(STORAGE_KEY) || 'light';
        const next    = current === 'light' ? 'dark' : 'light';
        saveTheme(next, null);
        _updateIcon(next);
    }

    function switchOrg(linkEl) {
        const name = linkEl.textContent.trim();
        // Update trigger display
        const trigger = document.querySelector('.uikit-appheader-org-trigger');
        if (trigger) {
            const avatar = trigger.querySelector('.uikit-appheader-org-avatar');
            const label  = trigger.querySelector('.uikit-appheader-org-name');
            if (avatar) avatar.textContent = name.charAt(0).toUpperCase();
            if (label)  label.textContent  = name;
        }
        // Mark active
        document.querySelectorAll('.uikit-appheader-org-item').forEach(el => {
            el.classList.toggle('active', el.textContent.trim() === name);
        });
        if (window.UiKitDropdown) UiKitDropdown.closeAll();
    }

    // Sync icon on page load (after DOM ready)
    document.addEventListener('DOMContentLoaded', function () {
        _updateIcon(localStorage.getItem(STORAGE_KEY) || 'light');
    });

    window.UiKitAppHeader = { cycleTheme, switchOrg };
})();

