// Select the menu button and nav
const menuButton = document.getElementById('menu');
const nav = document.querySelector('nav');

// Toggle the nav open/closed when button clicked
menuButton.addEventListener('click', () => {
  nav.classList.toggle('open');

  // Change the button text when open or closed
  if (nav.classList.contains('open')) {
    menuButton.textContent = '✕'; // Close icon
  } else {
    menuButton.textContent = '≡'; // Hamburger icon
  }
});

// Set current year in the footer
document.getElementById('currentyear').textContent = new Date().getFullYear();

// Set last modified date in the footer
document.getElementById('lastModified').textContent = document.lastModified;
