// Add header shadow
const header = document.querySelector('.header');

function QueryShadow() {
  if (window.scrollY > 40) {
    header.classList.add('shadow');
  }
  else {
    header.classList.remove('shadow');
  }
}
window.addEventListener('scroll', QueryShadow);

// Trigger animations
const animatedElements = document.querySelectorAll('.animate-fade');

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  animatedElements.forEach((el) => {
    const position = el.getBoundingClientRect().top;

    if (position < windowHeight - 50) {
      el.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);

// Toggle menu btn
const menuBtn = document.querySelector('.toggle-menu');
const nav = document.querySelector('nav');
const icons = menuBtn.querySelectorAll('.menu-icon');
const navLinks = document.querySelectorAll("nav a");

function ToggleMenu() {
  nav.classList.toggle('close-menu');
  icons.forEach(icon => {
    icon.classList.toggle('close-icon');
  });
}
menuBtn.addEventListener('click', ToggleMenu);
navLinks.forEach((link) => {
  link.addEventListener('click', ToggleMenu);
});

// Add active link state
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
  let scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 80;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinks.forEach((link) => {
        link.removeAttribute("aria-current");
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.setAttribute("aria-current", "true");
        }
      });
    }
  });
});

// Remove focus on elements
document.addEventListener('mouseup', (e) => {
  if (e.target.matches('button, a, svg, path')) {
    e.target.blur();
  }
});