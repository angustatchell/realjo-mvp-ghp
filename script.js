document.getElementById('year').textContent = new Date().getFullYear();
const slides = Array.from(document.querySelectorAll('.slide'));
let idx = 0;
setInterval(() => {
  if (!slides.length) return;
  slides[idx].classList.remove('is-active');
  idx = (idx + 1) % slides.length;
  slides[idx].classList.add('is-active');
}, 5000);

// --- HERO BACKGROUND ROTATION ---
const hero = document.querySelector('.hero');
if (hero) {
  const heroImages = [
    'assets/img/hero-1.jpg',
    'assets/img/hero-2.jpg',
    'assets/img/hero-3.jpg'
  ];
  let currentHero = 0;

  // Initialize first image
  hero.style.backgroundImage = `linear-gradient(to bottom, rgba(0,0,0,.35), rgba(0,0,0,.35)), url('${heroImages[0]}')`;

  setInterval(() => {
    currentHero = (currentHero + 1) % heroImages.length;
    hero.style.backgroundImage = `linear-gradient(to bottom, rgba(0,0,0,.35), rgba(0,0,0,.35)), url('${heroImages[currentHero]}')`;
  }, 5000); // 5-second rotation
}
