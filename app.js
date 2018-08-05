var backdrop = document.querySelector('.backdrop');
var mobileNav = document.querySelector('.mobile-nav');
var mobileNavLinks = document.querySelectorAll('.mobile-nav a');
var mobileMenuButton = document.querySelector('.mobile-menu-button');
var mobileMenuBar = document.querySelector('.mobile-menu-bar')
var mobileCheck = window.matchMedia("(max-width: 899px)")


backdrop.addEventListener('click', function () {
  hideItemsMobile();
})

mobileNavLinks.forEach(function(navLink) {
  navLink.addEventListener('click', function () {
    hideItemsMobile();
  })
})

function hideItemsMobile () {
    if (mobileCheck.matches) {
    backdrop.classList.add('hidden');
    mobileNav.classList.add('hidden');
    mobileMenuBar.classList.remove('hidden');
  }
} 

mobileMenuButton.addEventListener('click', function() {
  if (mobileCheck.matches) {
    backdrop.classList.remove('hidden');
    mobileNav.classList.remove('hidden');
    mobileMenuBar.classList.add('hidden');
  }
})
