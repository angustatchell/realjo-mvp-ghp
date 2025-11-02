document.getElementById('year').textContent = new Date().getFullYear();
const slides = Array.from(document.querySelectorAll('.slide'));
let idx = 0;
setInterval(() => {
  if (!slides.length) return;
  slides[idx].classList.remove('is-active');
  idx = (idx + 1) % slides.length;
  slides[idx].classList.add('is-active');
}, 5000);
