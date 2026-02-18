function openMenu() {
  document.getElementById("sidebar").classList.add("active");
  document.getElementById("overlay").classList.add("active");
}

function closeMenu() {
  document.getElementById("sidebar").classList.remove("active");
  document.getElementById("overlay").classList.remove("active");
}

function toggleDarkMode() {
  document.body.classList.toggle("dark");
}


// Dark Mode Toggle
function toggleTheme() {
    document.body.classList.toggle("dark");
}
