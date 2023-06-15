console.log('Hello, Parcel!');
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const logo = document.querySelector('.nav-links');
  
    if (window.scrollY > 0) {
      navbar.classList.add('sticky');
      logo.style.opacity = '0';
    } else {
      navbar.classList.remove('sticky');
      logo.style.opacity = '1';
    }
  });
  