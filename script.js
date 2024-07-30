'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelector("[data-nav-link]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

const navToggleEvent = function (elem) {
    for (let i = 0; i < elem.length; i++ ) {
        elem[i].addEventListener("click", function () {
            navbar.classList.toggle("active");
            overlay.classList.toggle("active");
        });
    }
}

navToggleEvent(navElemArr);
navToggleEvent(navLinks);

/**
 * header sticky & go top
 */

// const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
   
    if (window.scrollY >= 200) {
        // header.classList.add("active");
        goTopBtn.classList.add("active");
    } else {
        header.classList.remove("active");
        goTopBtn.classList.remove("active");
    }
});


const header = document.querySelector('.header');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  if (window.scrollY < lastScrollY) {
    header.classList.add('show');
  } else {
    header.classList.remove('show');
  }
  lastScrollY = window.scrollY;
});





