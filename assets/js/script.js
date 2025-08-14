const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('nav a');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const galleryItems = document.querySelectorAll('.gallery-item');
const closeBtn = document.querySelector('.close');
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

// Hamburger toggle
hamburger.addEventListener('click', () => nav.classList.toggle('show'));

// Close nav when link clicked
navLinks.forEach(link => link.addEventListener('click', () => nav.classList.remove('show')));

// Gallery Lightbox
galleryItems.forEach(item => item.addEventListener('click', () => {
    lightbox.style.display = "block";
    lightboxImg.src = item.src;
}));

closeBtn.addEventListener('click', () => lightbox.style.display = "none");

// Close lightbox if click outside
lightbox.addEventListener('click', e => {
    if(e.target !== lightboxImg && e.target !== closeBtn) lightbox.style.display = "none";
});

// Zoom on click
let zoomed = false;
lightboxImg.addEventListener('click', () => {
    if(!zoomed){
        lightboxImg.style.transform = "scale(2)";
        zoomed = true;
        lightboxImg.style.cursor = "zoom-out";
    } else {
        lightboxImg.style.transform = "scale(1)";
        zoomed = false;
        lightboxImg.style.cursor = "zoom-in";
    }
});

form.addEventListener('submit', function(e) {
    e.preventDefault();
  
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
      .then(() => {
          status.innerText = "Message sent successfully!";
          form.reset();
      }, (err) => {
          status.innerText = "Oops, something went wrong. Try again.";
          console.error(err);
      });
  });
