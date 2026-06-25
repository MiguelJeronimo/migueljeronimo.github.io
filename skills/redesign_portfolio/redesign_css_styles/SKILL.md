---
name: redesign_css_styles
description: |
  Implementa todos los estilos CSS modernos para el portfolio rediseñado. Incluye glassmorphism,
  animaciones, responsive design, y micro-interacciones. Debe ejecutarse DESPUÉS de
  redesign_html_structure.
---

# Skill: Estilos CSS — Diseño Moderno y Animaciones

## Objetivo

Implementar el CSS completo del portfolio con un diseño dark mode premium, utilizando
variables del design system, glassmorphism, animaciones suaves y diseño responsive.

---

## Organización de Archivos CSS

### `css/index.css` — Estilos principales
Contiene: reset, variables, layout, componentes, responsive

### `css/animations.css` — Animaciones separadas
Contiene: keyframes, animaciones de entrada, typing effect, blobs

---

## `css/animations.css` — Contenido Completo

```css
/* =========================================
   ANIMATIONS.CSS — Keyframes y Animaciones
   Portfolio: Miguel Angel Jerónimo
   ========================================= */

/* Fade In desde abajo */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Fade In simple */
@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}

/* Scale In */
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Slide In desde la izquierda */
@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-60px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Slide In desde la derecha */
@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(60px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Blob flotante */
@keyframes blobFloat {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33%       { transform: translate(30px, -20px) scale(1.05); }
  66%       { transform: translate(-20px, 20px) scale(0.95); }
}

/* Ring pulsante del avatar */
@keyframes ringPulse {
  0%, 100% { transform: scale(1); opacity: 0.6; }
  50%       { transform: scale(1.08); opacity: 1; }
}

/* Typing cursor parpadeante */
@keyframes cursorBlink {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
}

/* Badge dot pulsante */
@keyframes dotPulse {
  0%, 100% { transform: scale(1); opacity: 1; box-shadow: 0 0 0 0 rgba(74, 222, 128, 0.4); }
  50%       { transform: scale(1.2); opacity: 0.9; box-shadow: 0 0 0 6px rgba(74, 222, 128, 0); }
}

/* Shimmer en cards */
@keyframes shimmer {
  0%   { background-position: -200% center; }
  100% { background-position: 200% center; }
}

/* Scroll indicator */
@keyframes scrollBounce {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(8px); }
}

/* Rotate gradiente */
@keyframes rotateBg {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

/* ---- Clases de animación aplicadas en JS con IntersectionObserver ---- */
.animate-fade-up {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.animate-fade-up.in-view {
  opacity: 1;
  transform: translateY(0);
}

.animate-slide-left {
  opacity: 0;
  transform: translateX(-60px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.animate-slide-left.in-view {
  opacity: 1;
  transform: translateX(0);
}

.animate-slide-right {
  opacity: 0;
  transform: translateX(60px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.animate-slide-right.in-view {
  opacity: 1;
  transform: translateX(0);
}

.animate-scale {
  opacity: 0;
  transform: scale(0.85);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.animate-scale.in-view {
  opacity: 1;
  transform: scale(1);
}

/* Delay helpers */
.delay-100 { transition-delay: 0.1s; }
.delay-200 { transition-delay: 0.2s; }
.delay-300 { transition-delay: 0.3s; }
.delay-400 { transition-delay: 0.4s; }
.delay-500 { transition-delay: 0.5s; }
```

---

## `css/index.css` — Contenido Completo

### Estructura del archivo:
1. Variables (`:root`) — del `redesign_design_system` skill
2. Reset y base global
3. Navbar
4. Hero Section
5. Section base (reutilizable)
6. About Section
7. Projects Section
8. Contact Section
9. Footer
10. Responsive (Mobile-first breakpoints)
11. Utilidades

```css
/* =========================================
   INDEX.CSS — Estilos Principales
   Portfolio: Miguel Angel Jerónimo
   ========================================= */

/* --- 1. Variables --- */
:root {
  /* (copiar bloque completo del skill redesign_design_system) */
}

/* --- 2. Reset y Base --- */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  font-size: 16px;
}

body {
  font-family: var(--font-primary);
  background-color: var(--color-bg);
  color: var(--color-text);
  line-height: 1.6;
  overflow-x: hidden;
}

img {
  max-width: 100%;
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
  transition: var(--t-base);
}

ul { list-style: none; }

/* --- 3. Navbar --- */
#navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(10, 10, 15, 0.8);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--color-border);
  transition: var(--t-base);
}

#navbar.scrolled {
  background: rgba(10, 10, 15, 0.95);
  box-shadow: var(--shadow-md);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--sp-6);
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-logo {
  font-size: 1.5rem;
  font-weight: 800;
  background: var(--gradient-accent);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.5px;
}

.nav-links {
  display: flex;
  gap: var(--sp-8);
  align-items: center;
}

.nav-link {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--color-text-muted);
  position: relative;
  padding-bottom: 4px;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--gradient-accent);
  border-radius: var(--radius-full);
  transition: var(--t-base);
}

.nav-link:hover,
.nav-link.active {
  color: var(--color-text);
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
}

.nav-hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.nav-hamburger span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--color-text);
  border-radius: var(--radius-full);
  transition: var(--t-base);
}

/* --- 4. Hero Section --- */
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding-top: 70px; /* navbar height */
}

.hero-blobs {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
}

.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.15;
  animation: blobFloat 8s ease-in-out infinite;
}

.blob--1 {
  width: 500px;
  height: 500px;
  background: var(--color-accent);
  top: -100px;
  left: -100px;
  animation-delay: 0s;
}

.blob--2 {
  width: 400px;
  height: 400px;
  background: var(--color-accent-2);
  bottom: -100px;
  right: -50px;
  animation-delay: -4s;
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 600px;
  animation: fadeInUp 0.8s ease forwards;
}

.hero-visual {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  animation: slideInRight 0.8s ease 0.2s both;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: var(--sp-4);
  background: rgba(74, 222, 128, 0.08);
  border: 1px solid rgba(74, 222, 128, 0.2);
  color: var(--color-success);
  font-size: 0.8rem;
  font-weight: 500;
  padding: 6px 14px;
  border-radius: var(--radius-full);
  margin-bottom: var(--sp-6);
}

.badge-dot {
  width: 8px;
  height: 8px;
  background: var(--color-success);
  border-radius: 50%;
  animation: dotPulse 2s ease-in-out infinite;
}

.hero-greeting {
  font-size: var(--text-md);
  color: var(--color-text-muted);
  margin-bottom: var(--sp-4);
  font-weight: 400;
}

.hero-name {
  font-size: var(--text-hero);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -2px;
  background: linear-gradient(135deg, var(--color-text) 0%, var(--color-accent) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: var(--sp-4);
}

.hero-title {
  font-size: var(--text-xl);
  font-weight: 500;
  color: var(--color-text-muted);
  margin-bottom: var(--sp-6);
  min-height: 2rem;
}

.typing-cursor {
  animation: cursorBlink 1s step-end infinite;
  color: var(--color-accent);
}

.hero-desc {
  color: var(--color-text-muted);
  font-size: var(--text-md);
  line-height: 1.8;
  margin-bottom: var(--sp-8);
  max-width: 480px;
}

.hero-cta {
  display: flex;
  gap: var(--sp-4);
  flex-wrap: wrap;
}

/* Avatar */
.avatar-container {
  position: relative;
  width: 300px;
  height: 300px;
}

.avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  border: 3px solid var(--color-glass-border);
}

.avatar-ring {
  position: absolute;
  inset: -12px;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  border: 2px solid transparent;
  background: var(--gradient-accent) border-box;
  -webkit-mask:
    linear-gradient(#fff 0 0) padding-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: destination-out;
  mask-composite: exclude;
  animation: ringPulse 3s ease-in-out infinite;
  opacity: 0.6;
}

/* --- 5. Botones (Reutilizables) --- */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 28px;
  border-radius: var(--radius-lg);
  font-family: var(--font-primary);
  font-size: var(--text-base);
  font-weight: 600;
  cursor: pointer;
  transition: var(--t-spring);
  border: none;
  white-space: nowrap;
}

.btn--primary {
  background: var(--gradient-accent);
  color: #fff;
  box-shadow: var(--shadow-glow);
}

.btn--primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 40px rgba(108, 99, 255, 0.5);
}

.btn--outline {
  background: transparent;
  color: var(--color-text);
  border: 1px solid var(--color-border);
  backdrop-filter: blur(10px);
}

.btn--outline:hover {
  border-color: var(--color-accent);
  color: var(--color-accent);
  transform: translateY(-2px);
}

/* --- 6. Sections Base --- */
.section {
  padding: var(--sp-24) 0;
}

.section-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--sp-6);
}

.section-header {
  text-align: center;
  margin-bottom: var(--sp-16);
}

.section-tag {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  color: var(--color-accent);
  margin-bottom: var(--sp-4);
  letter-spacing: 2px;
}

.section-title {
  font-size: var(--text-3xl);
  font-weight: 800;
  letter-spacing: -1px;
  line-height: 1.1;
}

/* --- 7. About Section --- */
.about-section {
  background: var(--color-surface);
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--sp-16);
  align-items: start;
}

.about-text p {
  color: var(--color-text-muted);
  line-height: 1.9;
  margin-bottom: var(--sp-6);
}

.skills-title {
  font-size: var(--text-lg);
  font-weight: 700;
  margin-bottom: var(--sp-6);
}

.skills-grid {
  display: flex;
  flex-wrap: wrap;
  gap: var(--sp-4);
}

.skill-tag {
  background: var(--color-glass);
  border: 1px solid var(--color-glass-border);
  color: var(--color-accent);
  padding: 6px 14px;
  border-radius: var(--radius-full);
  font-size: var(--text-sm);
  font-weight: 500;
  font-family: var(--font-mono);
  backdrop-filter: blur(10px);
  transition: var(--t-base);
}

.skill-tag:hover {
  background: rgba(108, 99, 255, 0.15);
  border-color: var(--color-accent);
  transform: translateY(-2px);
}

/* --- 8. Projects Section --- */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: var(--sp-8);
}

.project-card {
  background: var(--color-glass);
  border: 1px solid var(--color-glass-border);
  border-radius: var(--radius-2xl);
  padding: var(--sp-8);
  backdrop-filter: blur(20px);
  box-shadow: var(--shadow-card);
  transition: var(--t-spring);
  position: relative;
  overflow: hidden;
}

.project-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: var(--gradient-accent);
  opacity: 0;
  transition: var(--t-base);
}

.project-card:hover {
  transform: translateY(-8px);
  border-color: rgba(108, 99, 255, 0.4);
  box-shadow: var(--shadow-lg), var(--shadow-glow);
}

.project-card:hover::before {
  opacity: 1;
}

.project-card__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--sp-6);
}

.project-icon {
  font-size: 2.5rem;
}

.project-links {
  display: flex;
  gap: var(--sp-4);
}

.project-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  transition: var(--t-base);
}

.project-link:hover {
  border-color: var(--color-accent);
  background: rgba(108, 99, 255, 0.1);
}

.project-card__title {
  font-size: var(--text-xl);
  font-weight: 700;
  margin-bottom: var(--sp-4);
}

.project-card__desc {
  color: var(--color-text-muted);
  font-size: var(--text-base);
  line-height: 1.7;
  margin-bottom: var(--sp-6);
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--sp-2);
}

.project-tag {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--color-accent-2);
  background: rgba(168, 85, 247, 0.08);
  border: 1px solid rgba(168, 85, 247, 0.2);
  padding: 4px 10px;
  border-radius: var(--radius-full);
}

/* --- 9. Contact Section --- */
.contact-section {
  background: var(--color-surface);
  text-align: center;
}

.contact-desc {
  color: var(--color-text-muted);
  font-size: var(--text-md);
  margin: 0 auto var(--sp-8);
  max-width: 500px;
  line-height: 1.8;
}

.contact-email {
  display: inline-flex;
  align-items: center;
  gap: var(--sp-4);
  background: var(--color-glass);
  border: 1px solid var(--color-glass-border);
  border-radius: var(--radius-xl);
  padding: var(--sp-4) var(--sp-8);
  margin-bottom: var(--sp-8);
  cursor: pointer;
  transition: var(--t-base);
  backdrop-filter: blur(10px);
  font-size: var(--text-md);
}

.contact-email:hover {
  border-color: var(--color-accent);
  box-shadow: var(--shadow-glow);
  transform: translateY(-2px);
}

.contact-email__copy {
  font-size: var(--text-sm);
  color: var(--color-accent);
  font-family: var(--font-mono);
  background: rgba(108, 99, 255, 0.1);
  padding: 2px 8px;
  border-radius: var(--radius-sm);
}

.contact-social {
  display: flex;
  justify-content: center;
  gap: var(--sp-4);
  flex-wrap: wrap;
}

.social-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 24px;
  border-radius: var(--radius-lg);
  font-weight: 600;
  font-size: var(--text-base);
  border: 1px solid var(--color-border);
  background: var(--color-glass);
  backdrop-filter: blur(10px);
  transition: var(--t-spring);
}

.social-btn:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
}

.social-btn--linkedin:hover {
  border-color: #0077b5;
  color: #0077b5;
}

.social-btn--github:hover {
  border-color: #f0f6ff;
  color: #f0f6ff;
}

/* --- 10. Footer --- */
.footer {
  background: var(--color-bg);
  border-top: 1px solid var(--color-border);
  padding: var(--sp-8) 0;
  text-align: center;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--sp-6);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--sp-4);
}

.footer-credits {
  color: var(--color-text-muted);
  font-size: var(--text-sm);
}

.footer-nav {
  display: flex;
  gap: var(--sp-6);
}

.footer-nav a {
  color: var(--color-text-muted);
  font-size: var(--text-sm);
  transition: var(--t-fast);
}

.footer-nav a:hover {
  color: var(--color-accent);
}

.footer-copy {
  color: var(--color-text-faint);
  font-size: 0.75rem;
}

/* --- 11. Responsive --- */
@media (max-width: 768px) {
  .nav-links {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background: rgba(10, 10, 15, 0.98);
    backdrop-filter: blur(20px);
    padding: var(--sp-8) var(--sp-6);
    flex-direction: column;
    align-items: flex-start;
    gap: var(--sp-6);
    border-bottom: 1px solid var(--color-border);
    transform: translateY(-100%);
    opacity: 0;
    pointer-events: none;
    transition: var(--t-base);
  }

  .nav-links.open {
    transform: translateY(0);
    opacity: 1;
    pointer-events: all;
  }

  .nav-hamburger {
    display: flex;
  }

  .hero-section .section-container,
  .hero-section > div {
    flex-direction: column;
    text-align: center;
  }

  .hero-visual {
    order: -1;
  }

  .avatar-container {
    width: 200px;
    height: 200px;
  }

  .hero-cta {
    justify-content: center;
  }

  .hero-desc {
    margin-left: auto;
    margin-right: auto;
  }

  .about-grid {
    grid-template-columns: 1fr;
    gap: var(--sp-8);
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }

  .section-title {
    font-size: var(--text-2xl);
  }
}

@media (max-width: 480px) {
  .hero-cta {
    flex-direction: column;
    align-items: center;
  }

  .btn {
    width: 100%;
    justify-content: center;
  }
}

/* --- 12. Utilidades --- */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
  white-space: nowrap;
  border-width: 0;
}

.text-accent {
  color: var(--color-accent);
}

.text-gradient {
  background: var(--gradient-accent);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

---

## Instrucciones

1. Crear el archivo `css/animations.css` con el contenido del bloque de animaciones
2. Reemplazar completamente el contenido de `css/index.css` con el CSS documentado
3. Asegurarse de incluir el bloque `:root` completo del `redesign_design_system` skill al inicio
4. Verificar que las fuentes de Google Fonts estén cargadas en el HTML
5. Eliminar `css/material.deep_purple-purple.min.css` del directorio (ya no se usará)
