/**
 * Portfolio — Miguel Angel Jerónimo Díaz
 * js/index.js — Interacciones y animaciones
 *
 * Funcionalidades:
 *  1. initNavbar()           — Scroll shadow + clase scrolled
 *  2. initHamburger()        — Mobile nav toggle
 *  3. initTypingEffect()     — Typing animation en hero subtitle
 *  4. initScrollAnimations() — IntersectionObserver animaciones on-scroll
 *  5. initSmoothScroll()     — Smooth scroll en links de anclaje
 *  6. initCopyEmail()        — Click to copy email
 *  7. initActiveSection()    — Nav link activo según sección visible
 *  8. initFooterYear()       — Actualizar año en el footer dinámicamente
 */

'use strict';

/* =========================================
   1. NAVBAR — Scroll shadow + clase scrolled
   ========================================= */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        if (window.scrollY > 20) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

/* =========================================
   2. HAMBURGER MENU — Mobile nav toggle
   ========================================= */
function initHamburger() {
  const hamburger = document.getElementById('nav-hamburger');
  const navLinks  = document.getElementById('nav-links');
  const navbar    = document.getElementById('navbar');

  if (!hamburger || !navLinks) return;

  function closeMenu() {
    navLinks.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  function openMenu() {
    navLinks.classList.add('open');
    hamburger.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    // Prevent body scroll when menu is open on mobile
    document.body.style.overflow = 'hidden';
  }

  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.contains('open');
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Cerrar al hacer click en un link
  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Cerrar al hacer click fuera del menú
  document.addEventListener('click', (e) => {
    if (navbar && !navbar.contains(e.target)) {
      closeMenu();
    }
  });

  // Cerrar con tecla Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMenu();
    }
  });
}

/* =========================================
   3. TYPING EFFECT — Hero subtitle
   ========================================= */
function initTypingEffect() {
  const el = document.getElementById('typing-text');
  if (!el) return;

  const texts = [
    'Desarrollador de Software',
    'Ingeniero en Sistemas',
    'Android Developer',
    'Web Developer',
    'Problem Solver 🚀'
  ];

  let textIndex   = 0;
  let charIndex   = 0;
  let isDeleting  = false;
  let typingSpeed = 100;
  let isPaused    = false;

  function type() {
    if (isPaused) return;

    const currentText = texts[textIndex];

    if (isDeleting) {
      el.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 45;
    } else {
      el.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 100 + Math.random() * 40; // velocidad ligeramente variable
    }

    if (!isDeleting && charIndex === currentText.length) {
      // Pausa al terminar de escribir
      typingSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex  = (textIndex + 1) % texts.length;
      typingSpeed = 400;
    }

    setTimeout(type, typingSpeed);
  }

  // Iniciar después de un breve delay para que el hero ya esté visible
  setTimeout(type, 800);
}

/* =========================================
   4. SCROLL ANIMATIONS — IntersectionObserver
   ========================================= */
function initScrollAnimations() {
  // Verificar soporte del browser
  if (!('IntersectionObserver' in window)) {
    // Fallback: mostrar todo si no hay soporte
    document.querySelectorAll(
      '.animate-fade-up, .animate-slide-left, .animate-slide-right, .animate-scale'
    ).forEach(el => el.classList.add('in-view'));
    return;
  }

  const animatedEls = document.querySelectorAll(
    '.animate-fade-up, .animate-slide-left, .animate-slide-right, .animate-scale'
  );

  if (!animatedEls.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target); // Observar solo una vez
        }
      });
    },
    {
      threshold: 0.08,
      rootMargin: '0px 0px -40px 0px'
    }
  );

  animatedEls.forEach(el => observer.observe(el));
}

/* =========================================
   5. SMOOTH SCROLL — Links de anclaje
   ========================================= */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (!targetId || targetId === '#') return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();

      const navbarHeight = document.getElementById('navbar')?.offsetHeight || 70;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - navbarHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    });
  });
}

/* =========================================
   6. COPY EMAIL — Click to clipboard
   ========================================= */
function initCopyEmail() {
  const emailEl    = document.getElementById('contact-email');
  const copyLabel  = document.getElementById('copy-label');

  if (!emailEl) return;

  const emailText = 'miguelangeljd93@gmail.com';

  emailEl.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(emailText);
      showCopyFeedback(copyLabel, '¡Copiado! ✓', true);
    } catch (err) {
      // Fallback para navegadores sin soporte de Clipboard API
      fallbackCopy(emailText);
      showCopyFeedback(copyLabel, '¡Copiado! ✓', true);
    }
  });
}

/**
 * Feedback visual al copiar
 */
function showCopyFeedback(el, message, isSuccess) {
  if (!el) return;
  const original    = el.textContent;
  const originalColor = el.style.color;

  el.textContent = message;
  el.style.color = isSuccess ? 'var(--color-success)' : 'var(--color-error)';

  setTimeout(() => {
    el.textContent = original;
    el.style.color = originalColor;
  }, 2200);
}

/**
 * Fallback para copiar sin Clipboard API
 */
function fallbackCopy(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.opacity  = '0';
  textarea.style.top      = '0';
  textarea.style.left     = '0';
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();
  try {
    document.execCommand('copy');
  } catch (e) {
    console.warn('Fallback copy failed:', e);
  }
  document.body.removeChild(textarea);
}

/* =========================================
   7. ACTIVE SECTION — Resaltar nav link activo
   ========================================= */
function initActiveSection() {
  if (!('IntersectionObserver' in window)) return;

  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link[data-section]');

  if (!sections.length || !navLinks.length) return;

  function setActiveLink(sectionId) {
    navLinks.forEach(link => {
      if (link.dataset.section === sectionId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    },
    {
      threshold: 0.35,
      rootMargin: `-${document.getElementById('navbar')?.offsetHeight || 70}px 0px 0px 0px`
    }
  );

  sections.forEach(section => observer.observe(section));
}

/* =========================================
   8. FOOTER YEAR — Año dinámico
   ========================================= */
function initFooterYear() {
  const yearEl = document.getElementById('footer-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

/* =========================================
   9. HOVER CARD GLOW — Efecto de glow siguiendo el mouse
   ========================================= */
function initCardMouseGlow() {
  const cards = document.querySelectorAll('.project-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty('--mouse-x', `${x}%`);
      card.style.setProperty('--mouse-y', `${y}%`);
    });

    card.addEventListener('mouseleave', () => {
      card.style.removeProperty('--mouse-x');
      card.style.removeProperty('--mouse-y');
    });
  });
}

/* =========================================
   INIT — Inicializar todo cuando el DOM esté listo
   ========================================= */
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initHamburger();
  initTypingEffect();
  initSmoothScroll();
  initScrollAnimations();
  initCopyEmail();
  initActiveSection();
  initFooterYear();
  initCardMouseGlow();

  console.log('%c✨ Portfolio de Miguel Angel Jerónimo cargado', 'color: #6c63ff; font-weight: bold; font-size: 14px;');
  console.log('%c💻 Diseñado y construido con ❤️', 'color: #a855f7; font-size: 12px;');
});