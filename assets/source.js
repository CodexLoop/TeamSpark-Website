var header = document.querySelector('.header');
  function QueryShadow() {
    if (window.scrollY > 40){
      header.classList.add('shadow');
    }
    else {
      header.classList.remove('shadow');
    }
  }
  window.addEventListener('scroll', QueryShadow);

  var menuBtn = document.querySelector('.toggle-menu');
  var hurmburgerIcon = document.querySelector('.fa-bars');
  var closeIcon = document.querySelector('.fa-xmark');
  var nav = document.querySelector('nav')
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