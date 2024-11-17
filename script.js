// Smooth Scrolling for Navigation
document.querySelectorAll('.nav-bar a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

// Highlight Selected Package
const packages = document.querySelectorAll('.card');
packages.forEach(packageCard => {
  packageCard.addEventListener('click', () => {
    packages.forEach(card => card.classList.remove('selected'));
    packageCard.classList.add('selected');
  });
});

// Form Validation for Newsletter
const form = document.querySelector('footer form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const emailInput = this.querySelector('input[type="email"]');
  const email = emailInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailPattern.test(email)) {
    alert('Thanks for signing up!');
    emailInput.value = ''; // Clear the input
  } else {
    alert('Please enter a valid email address.');
  }
});

// Lightbox for Gallery Images
const galleryImages = document.querySelectorAll('.gallery img');
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

galleryImages.forEach(image => {
  image.addEventListener('click', () => {
    lightbox.classList.add('active');
    const img = document.createElement('img');
    img.src = image.src;
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild);
    }
    lightbox.appendChild(img);
  });
});

lightbox.addEventListener('click', () => {
  lightbox.classList.remove('active');
});

// Parallax Effect for Hero Section
window.addEventListener('scroll', () => {
  const hero = document.querySelector('.hero');
  const scrollY = window.scrollY;
  hero.style.backgroundPositionY = `${scrollY * 0.5}px`;
});

// Scroll-To-Top Button
const scrollToTopButton = document.createElement('button');
scrollToTopButton.id = 'scrollToTop';
scrollToTopButton.textContent = '↑';
document.body.appendChild(scrollToTopButton);

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
  }
});

scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
