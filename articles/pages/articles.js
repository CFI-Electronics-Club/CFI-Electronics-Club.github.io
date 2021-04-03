// function to set a given theme/color-scheme
function setTheme(themeName) {
  localStorage.setItem("theme", themeName);
  if (themeName == "theme-dark") {
    document.styleSheets[0].disabled = true;
    document.styleSheets[1].disabled = false;
  } else {
    document.styleSheets[0].disabled = false;
    document.styleSheets[1].disabled = true;
  }
}
// function to toggle between light and dark theme
function toggleTheme() {
  var check = document.getElementById("checkbox");
  if (check.checked) {
    setTheme("theme-dark");
  } else {
    setTheme("theme-light");
  }
}
// Immediately invoked function to set the theme on initial load
(function () {
  var check = document.getElementById("checkbox");

  if (localStorage.getItem("theme") === "theme-dark") {
    setTheme("theme-dark");
    check.checked = true;
  } else {
    setTheme("theme-light");
    check.checked = false;
  }
})();
