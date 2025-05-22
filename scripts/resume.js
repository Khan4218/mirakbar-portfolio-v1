// Typing animation for <h2>
const heading = document.querySelector('main h2');
const text = "Resume";
let idx = 0;

function typeWriter() {
  if (idx < text.length) {
    heading.textContent += text.charAt(idx);
    idx++;
    setTimeout(typeWriter, 120);
  }
}

window.addEventListener('load', () => {
  heading.textContent = '';
  typeWriter();
  fadeInOnScroll(); // Also call fadeIn on load
});

// Fade in sections on scroll
const sections = document.querySelectorAll('section');

function fadeInOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.classList.add('visible');
    } else {
      section.classList.remove('visible');
    }
  });
}

window.addEventListener('scroll', fadeInOnScroll);

// Back to Top button
const backToTopBtn = document.getElementById('backToTopBtn');

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});

// Dark mode toggle
const toggleBtn = document.getElementById('darkModeToggle');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  if (document.body.classList.contains('light-mode')) {
    toggleBtn.textContent = '☀️';
  } else {
    toggleBtn.textContent = '🌙';
  }
});

// Smooth scroll for nav links (for anchors)
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    const href = link.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
  });
});