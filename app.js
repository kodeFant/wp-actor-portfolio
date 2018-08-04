var backdrop = document.querySelector('.backdrop');
var mobileNav = document.querySelector('.mobile-nav');
var mobileNavLinks = document.querySelectorAll('.mobile-nav a');
var mobileMenuButton = document.querySelector('.mobile-menu-button');
var mobileMenuBar = document.querySelector('.mobile-menu-bar')

backdrop.addEventListener('click', function () {
  hideItemsMobile();
})

mobileNavLinks.forEach(function(navLink) {
  navLink.addEventListener('click', function () {
    hideItemsMobile();
  })
})

function hideItemsMobile () {
  backdrop.style = "display: none";
  mobileNav.style = "display: none";
  mobileMenuBar.style = "display: flex";
} 

mobileMenuButton.addEventListener('click', function(navLink) {
  backdrop.style = "display: block";
  mobileNav.style = "display: flex";
  mobileMenuBar.style = "display: none";
})