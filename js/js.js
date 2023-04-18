   //JS code for main pages//
// Get the "menu-icon" element
var menuIcon = document.querySelector('.menu-icon');

// Get the dropdown menu element
var dropdownMenu = document.querySelector('.dropdown-menu');

// Add a click event listener to the "menu-icon" element
menuIcon.addEventListener('click', function() {
  // Toggle the "active" class on the dropdown menu element
  dropdownMenu.classList.toggle('active');
});
