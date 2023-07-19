const searchContainer = document.querySelector('.search-container');
const searchInput = searchContainer.querySelector('input');
const searchIcon = searchContainer.querySelector('.search-icon');
const closeIcon = searchContainer.querySelector('.close-icon');

searchIcon.addEventListener('click', function() {
  searchContainer.classList.add('expanded');
  searchInput.focus();
  searchIcon.style.display = 'none';
  closeIcon.style.display = 'block';
});

closeIcon.addEventListener('click', function() {
  searchContainer.classList.remove('expanded');
  searchInput.value = '';
  searchIcon.style.display = 'block';
  closeIcon.style.display = 'none';
});





const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.navmap');
const navClose = document.querySelector('.nav-close');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('nav-open');
  nav.style.display = 'block';
});

navClose.addEventListener('click', () => {
  nav.classList.remove('nav-open');
  nav.style.display = 'none';
});



//////////navmap 2



const newNavToggle = document.querySelector('.new-nav-toggle');
const newNav = document.querySelector('.new-navmap');
const newNavClose = document.querySelector('.new-nav-close');

newNavToggle.addEventListener('click', () => {
  newNav.classList.toggle('new-nav-open');
  newNav.style.display = 'block';
});

newNavClose.addEventListener('click', () => {
  newNav.classList.remove('new-nav-open');
  newNav.style.display = 'none';
});




function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.classList.toggle('menu-open');
}

function closeMenu() {
    var menu = document.querySelector('.menu');
    var logo = document.querySelector('.logo');
    logo.classList.remove('menu-open');
    menu.classList.remove('menu-open');
    }

    var closeIcons = document.querySelectorAll('.close-icon');
    for (var i = 0; i < closeIcons.length; i++) {
    closeIcons[i].addEventListener('click', closeMenu);
}


function toggleMenuTwo(){
    document.getElementById("section-two").style.display = "block";
}


let valueDisplays = document.querySelectorAll(".num");
let interval = 10000;

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      observer.unobserve(entry.target);
    }
  });
});

valueDisplays.forEach((valueDisplay) => {
  observer.observe(valueDisplay);
});

function animateCounter(valueDisplay) {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
}