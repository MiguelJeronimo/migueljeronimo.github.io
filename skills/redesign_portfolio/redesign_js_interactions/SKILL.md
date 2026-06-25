---
name: redesign_js_interactions
description: |
  Implementa las interacciones JavaScript del portfolio rediseñado: typing animation,
  smooth scroll, IntersectionObserver para animaciones on-scroll, navbar activo,
  hamburger menu y copy-to-clipboard del email. Debe ejecutarse DESPUÉS de
  redesign_css_styles.
---

# Skill: Interacciones JavaScript — Behavior y Animaciones

## Objetivo

Reescribir completamente `js/index.js` con funcionalidades modernas: animaciones de entrada
al hacer scroll, typing effect, navegación activa en el navbar, menú hamburger y
funcionalidad de copiar email al portapapeles.

---

## Funcionalidades a Implementar

| Función | Descripción |
|---|---|
| `initNavbar()` | Scroll shadow + active link highlight |
| `initHamburger()` | Toggle del menú mobile |
| `initTypingEffect()` | Typing animation en el hero subtitle |
| `initScrollAnimations()` | IntersectionObserver para animar elementos al entrar al viewport |
| `initSmoothScroll()` | Smooth scroll en todos los links de anclaje |
| `initCopyEmail()` | Click to copy del email en la sección contacto |
| `initActiveSection()` | Resaltar el link del nav según la sección visible |

---

## `js/index.js` — Contenido Completo

```javascript
/**
 * Portfolio — Miguel Angel Jerónimo Díaz
 * js/index.js — Interacciones y animaciones
 */

'use strict';

/* =========================================
   1. NAVBAR — Scroll shadow + clase scrolled
   ========================================= */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });
}

/* =========================================
   2. HAMBURGER MENU — Mobile nav toggle
   ========================================= */
function initHamburger() {
  const hamburger = document.getElementById('nav-hamburger');
  const navLinks  = document.getElementById('nav-links');
  if (!hamburger || !navLinks) return;

  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen);
    // Animar las barras del hamburger
    hamburger.classList.toggle('open', isOpen);
  });

  // Cerrar menú al hacer click en un link
  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  // Cerrar menú al hacer click fuera
  document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target)) {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
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
    'Mobile Developer',
    'Web Developer',
    'Problem Solver'
  ];

  let textIndex    = 0;
  let charIndex    = 0;
  let isDeleting   = false;
  let typingSpeed  = 100;

  function type() {
    const currentText = texts[textIndex];

    if (isDeleting) {
      el.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50;
    } else {
      el.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentText.length) {
      // Pausa al terminar de escribir
      typingSpeed = 1800;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex  = (textIndex + 1) % texts.length;
      typingSpeed = 400;
    }

    setTimeout(type, typingSpeed);
  }

  // Iniciar con un pequeño delay para que el hero ya esté visible
  setTimeout(type, 600);
}

/* =========================================
   4. SCROLL ANIMATIONS — IntersectionObserver
   ========================================= */
function initScrollAnimations() {
  const animatedEls = document.querySelectorAll(
    '.animate-fade-up, .animate-slide-left, .animate-slide-right, .animate-scale'
  );

  if (!animatedEls.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          // Una vez animado, dejar de observar
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -60px 0px'
    }
  );

  animatedEls.forEach(el => observer.observe(el));
}

/* =========================================
   5. SMOOTH SCROLL — Todos los links de anclaje
   ========================================= */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

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
  const emailEl = document.getElementById('contact-email');
  if (!emailEl) return;

  const emailText  = 'miguelangeljd93@gmail.com';
  const copyLabel  = emailEl.querySelector('.contact-email__copy');

  emailEl.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(emailText);

      // Feedback visual
      if (copyLabel) {
        const original = copyLabel.textContent;
        copyLabel.textContent = '¡Copiado!';
        copyLabel.style.color = 'var(--color-success)';

        setTimeout(() => {
          copyLabel.textContent = original;
          copyLabel.style.color = '';
        }, 2000);
      }
    } catch (err) {
      console.warn('No se pudo copiar al portapapeles:', err);
    }
  });
}

/* =========================================
   7. ACTIVE SECTION — Resaltar nav link activo
   ========================================= */
function initActiveSection() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link[data-section]');

  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const activeId = entry.target.id;

          navLinks.forEach(link => {
            if (link.dataset.section === activeId) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    },
    {
      threshold: 0.4,
      rootMargin: '-70px 0px 0px 0px'
    }
  );

  sections.forEach(section => observer.observe(section));
}

/* =========================================
   8. LINKS SOCIALES — LinkedIn y GitHub
   (Mantenidos del index.js original)
   ========================================= */
function initSocialLinks() {
  const linkedin = document.getElementById('linkedin');
  const github   = document.getElementById('github');

  // Los links son <a> con href, no necesitan onclick manual
  // Pero si hay alguno como <button>, lo manejamos aquí
  if (linkedin && linkedin.tagName === 'BUTTON') {
    linkedin.addEventListener('click', (e) => {
      e.preventDefault();
      window.open('https://www.linkedin.com/in/miguel-jer%C3%B3nimo-9877a9153/', '_blank', 'noopener');
    });
  }

  if (github && github.tagName === 'BUTTON') {
    github.addEventListener('click', (e) => {
      e.preventDefault();
      window.open('https://github.com/MiguelJeronimo', '_blank', 'noopener');
    });
  }
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
  initSocialLinks();

  console.log('✨ Portfolio de Miguel Angel Jerónimo cargado correctamente.');
});
```

---

## Instrucciones

1. Reemplazar completamente el contenido de `js/index.js` con el código documentado
2. Verificar que los IDs en el HTML coincidan con los que usa el JS (`nav-hamburger`, `nav-links`, `typing-text`, `contact-email`, etc.)
3. Añadir las clases de animación (`animate-fade-up`, `animate-slide-left`, etc.) a los elementos del HTML que deban animarse al entrar al viewport:
   - Sección about: clases `animate-fade-up` con `delay-100`, `delay-200`, etc.
   - Project cards: clase `animate-scale` con delays escalonados
   - Contact section: clase `animate-fade-up`
4. Verificar en navegador que no haya errores en consola después de implementar
5. Comprobar que el typing effect se vea correcto y no haya elementos sin el cursor

## Notas de Compatibilidad

- `navigator.clipboard.writeText()` requiere HTTPS o `localhost` — en GitHub Pages funciona correctamente
- `IntersectionObserver` tiene soporte del 95%+ en navegadores modernos
- El `backdrop-filter` de CSS no funciona en Firefox sin el flag activado — añadir fallback con `background-color` semi-opaco
