/* ============================================
   KaraokeBar — Main JavaScript
   Simple, readable, no frameworks
   ============================================ */

/* --- State --- */
let currentLang = 'en';
let currentPage = 'home';

/* ============================================
   LANGUAGE SWITCHER
   ============================================ */
function setLanguage(lang) {
  currentLang = lang;
  document.body.classList.remove('lang-en', 'lang-et');
  document.body.classList.add('lang-' + lang);

  /* Update active button */
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  /* Save preference */
  localStorage.setItem('kb-lang', lang);
}

/* ============================================
   PAGE NAVIGATION (Single-Page Application)
   ============================================ */
function showPage(pageId) {
  currentPage = pageId;

  /* Hide all pages */
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

  /* Show the target page */
  const target = document.getElementById('page-' + pageId);
  if (target) target.classList.add('active');

  /* Update nav link active state */
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.classList.toggle('active', link.dataset.page === pageId);
  });

  /* Update footer nav */
  document.querySelectorAll('.footer-nav a').forEach(link => {
    link.classList.toggle('active', link.dataset.page === pageId);
  });

  /* Close mobile menu */
  document.getElementById('nav-links').classList.remove('open');

  /* Scroll to top */
  window.scrollTo({ top: 0, behavior: 'smooth' });

  /* Update browser URL hash (for GitHub Pages deep-link) */
  window.location.hash = pageId === 'home' ? '' : pageId;
}

/* ============================================
   MOBILE NAV TOGGLE
   ============================================ */
function toggleMobileNav() {
  document.getElementById('nav-links').classList.toggle('open');
}

/* ============================================
   MENU — CATEGORY FILTER
   ============================================ */
function filterMenu(category) {
  /* Update active button */
  document.querySelectorAll('.cat-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.cat === category);
  });

  /* Show/hide items */
  document.querySelectorAll('.menu-item').forEach(item => {
    if (category === 'all' || item.dataset.cat === category) {
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
  });
}

/* ============================================
   CONTACT FORM SUBMISSION — Formspree
   ============================================ */
async function handleContactForm(event) {
  event.preventDefault();
  const form = event.target;
  const btn = form.querySelector('.btn-primary');

  btn.textContent = currentLang === 'en' ? 'Sending...' : 'Saatmine...';
  btn.disabled = true;

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      btn.textContent = currentLang === 'en' ? '✓ Sent!' : '✓ Saadetud!';
      btn.style.background = '#2ecc71';
      form.reset();

      setTimeout(() => {
        btn.textContent = currentLang === 'en' ? 'Send Message' : 'Saada sõnum';
        btn.style.background = '';
        btn.disabled = false;
      }, 3000);
    } else {
      throw new Error('Server error');
    }
  } catch (error) {
    btn.textContent = currentLang === 'en' ? 'Error — try again' : 'Viga — proovi uuesti';
    btn.style.background = '#e63f6f';
    btn.disabled = false;
  }
}

/* ============================================
   HIGHLIGHT TODAY IN HOURS TABLE
   ============================================ */
function highlightToday() {
  const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  const today = days[new Date().getDay()];
  const row = document.querySelector('.hours-table tr[data-day="' + today + '"]');
  if (row) row.classList.add('today');
}

/* ============================================
   HASH-BASED ROUTING (GitHub Pages support)
   ============================================ */
function routeFromHash() {
  const hash = window.location.hash.replace('#', '');
  const validPages = ['home', 'menu', 'gallery', 'contact'];
  if (validPages.includes(hash)) {
    showPage(hash);
  } else {
    showPage('home');
  }
}

/* ============================================
   INIT — runs when page loads
   ============================================ */
document.addEventListener('DOMContentLoaded', function () {
  /* Set saved language or default to English */
  const savedLang = localStorage.getItem('kb-lang') || 'en';
  if (['en', 'et', 'ru'].includes(savedLang)) {
    setLanguage(savedLang);
  } else {
    setLanguage('en');
  }

  /* Route based on URL hash */
  routeFromHash();

  /* Listen for hash changes (back/forward browser buttons) */
  window.addEventListener('hashchange', routeFromHash);

  /* Highlight today in opening hours */
  highlightToday();

  /* Attach contact form handler */
  const form = document.getElementById('contact-form');
  if (form) form.addEventListener('submit', handleContactForm);
});
