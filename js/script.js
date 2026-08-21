// Mobile nav toggle
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

if (burger && nav) {
  burger.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });
}

// FAQ accordion
document.querySelectorAll('.accordion__item').forEach((item) => {
  const trigger = item.querySelector('.accordion__trigger');
  trigger.addEventListener('click', () => {
    const wasOpen = item.classList.contains('is-open');
    document.querySelectorAll('.accordion__item').forEach((el) => el.classList.remove('is-open'));
    if (!wasOpen) item.classList.add('is-open');
  });
});

// Contact form (client-side only — no backend wired up yet)
const form = document.getElementById('contact-form');
const note = document.getElementById('form-note');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    note.textContent = 'Takk! Vi tar kontakt innen én arbeidsdag.';
    form.reset();
  });
}

// Shrink header on scroll
const header = document.getElementById('header');
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const current = window.scrollY;
  header.style.boxShadow = current > 10 ? '0 4px 20px rgba(27,46,40,.06)' : 'none';
  lastScroll = current;
});
