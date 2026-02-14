// Mobile Menu Toggle
function toggleMenu() {
    let menu = document.getElementById("nav-links");
    menu.style.display = (menu.style.display === "flex") ? "left" : "flex";
}

// Dark Mode Toggle
function toggleTheme() {
    document.body.classList.toggle("light");
}
