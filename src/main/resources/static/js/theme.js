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
