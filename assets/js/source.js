// Add header shadow
const header = document.querySelector('.header');

  function QueryShadow() {
    if (window.scrollY > 40){
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
  const hurmburgerIcon = document.querySelector('.fa-bars');
  const closeIcon = document.querySelector('.fa-xmark');

  const nav = document.querySelector('nav')
  function ToggleMenu(e) {
    if (e.target.classList.contains('fa-bars')) {
      e.target.classList.add('close-icon');
      closeIcon.classList.remove('close-icon');
      nav.classList.remove('close-menu');
      console.log('hey');
    }
    else {
      e.target.classList.add('close-icon');
      hurmburgerIcon.classList.remove('close-icon');
      nav.classList.add('close-menu')
      console.log('bye');
    }
  }
  menuBtn.addEventListener('click', ToggleMenu);

// Add active link state
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll("nav a");

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
        })
      }
    })
  })