const navbarToggle = document.getElementById("navbarToggle")
const navbar = document.getElementById("navbar")
const navbarOverlay = document.getElementById("navbarOverlay")

// Changes hamburger icon to X when menu is open, toggles navbar and overlay
navbarToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
    navbarOverlay.classList.toggle('active');

    if (navbar.classList.contains('active')) {
        navbarToggle.innerHTML = '&#10005;';
    }
    else {
        navbarToggle.innerHTML = '&#9776;';
    }
});

// Close navbar when clicked outside area
navbarOverlay.addEventListener('click', () => {
    navbar.classList.remove('active');
    navbarOverlay.classList.remove('active');
    navbarToggle.innerHTML = '&#9776;';
})