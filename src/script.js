console.log('Hello, Parcel!');
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  const logo = document.querySelector('.nav-links-inner');

  if (window.scrollY > 0) {
    navbar.classList.add('sticky');
    logo.classList.add('fade');
  } else {
    navbar.classList.remove('sticky');
    logo.classList.remove('fade');
  }
  if (window.scrollY === 0) {
    logo.classList.remove('fade');
  }
});


window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  const logo = document.querySelector('.logo-text');

  if (window.scrollY > 0) {
    navbar.classList.add('sticky');
    logo.classList.add('fade');
  } else {
    navbar.classList.remove('sticky');
    logo.classList.remove('fade');
  }
});

const rainbowButton = document.querySelector('.rainbow-bg');

document.addEventListener('mousemove', (e) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  rainbowButton.style.backgroundPosition = `${x * 200}% ${y * 200}%`;
});

window.addEventListener('scroll', function() {
  const smartphoneImage = document.querySelector('.smartphone-image');
  const scrollPosition = window.scrollY;

  smartphoneImage.style.transform = `translateY(-${scrollPosition * 0.1}px)`;
});


