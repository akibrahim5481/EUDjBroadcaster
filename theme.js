(function () {
  var KEY = "theme";

  function readTheme() {
    try {
      var stored = localStorage.getItem(KEY);
      if (stored === "light" || stored === "dark") return stored;
    } catch (e) { /* ignore */ }
    return "dark";
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem(KEY, theme);
    } catch (e) { /* ignore */ }
    var toggle = document.getElementById("theme-toggle");
    if (toggle) {
      var lightLabel = "Açık tema";
      var darkLabel = "Koyu tema";
      if (window.I18N && typeof window.I18N.t === "function") {
        lightLabel = window.I18N.t("nav.themeLight");
        darkLabel = window.I18N.t("nav.themeDark");
      }
      toggle.textContent = theme === "light" ? darkLabel : lightLabel;
      toggle.setAttribute("aria-pressed", theme === "light" ? "true" : "false");
    }
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute("content", theme === "light" ? "#f3f4f6" : "#121214");
    }
  }

  window.toggleTheme = function () {
    var next = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
    applyTheme(next);
  };

  applyTheme(readTheme());

  document.addEventListener("DOMContentLoaded", function () {
    applyTheme(readTheme());
    var year = document.getElementById("y");
    if (year) {
      year.textContent = new Date().getFullYear();
    }
  });
})();
