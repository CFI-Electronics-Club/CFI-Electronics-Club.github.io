function setTheme(themeName) {
  localStorage.setItem("theme", themeName);
  if (themeName == "theme-dark") {
    document.styleSheets[0].disabled = true;
    document.styleSheets[1].disabled = false;
    document.getElementById("nav").style.background = "#363636";

  } else {
    document.styleSheets[0].disabled = false;
    document.styleSheets[1].disabled = true;
    document.getElementById("nav").style.background = "midnightblue";

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

  if (localStorage.getItem("theme") === "theme-light") {
    setTheme("theme-light");
    check.checked = false;
  } else {
    setTheme("theme-dark");
    check.checked = true;
  }
})();