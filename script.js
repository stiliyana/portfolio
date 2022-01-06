var systemTheme = (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) ? "dark" : "light";
var storedTheme = Boolean(localStorage.getItem("theme")) ?
  localStorage.getItem("theme") : systemTheme;
document.getElementById("root").setAttribute("data-theme", storedTheme);

function switchTheme() {
  var container = document.getElementById("root");
  var currentTheme = container.getAttribute("data-theme");
  var newTheme = currentTheme === "dark" ? "light": "dark";
  localStorage.setItem("theme", newTheme);
  container.setAttribute("data-theme", newTheme);
  container.style.setProperty("--transition-duration", "0.3s");
}
