---
name: redesign_html_structure
description: |
  Reconstruye el HTML del portfolio con estructura semántica moderna, accesible y optimizada
  para SEO. Elimina la dependencia de Material Design Lite. Debe ejecutarse DESPUÉS del
  redesign_design_system skill.
---

# Skill: Estructura HTML — Reconstrucción Semántica

## Objetivo

Reemplazar completamente el `index.html` actual con una estructura HTML5 semántica, moderna,
accesible y libre de dependencias en Material Design Lite (MDL).

---

## Estructura de Secciones

El nuevo HTML debe contener las siguientes secciones en orden:

```
<header>          → Barra de navegación fija con efecto blur
<main>
  <section#hero>  → Hero section con nombre, título y CTA
  <section#about> → Acerca de mí con skills/tecnologías
  <section#projects> → Proyectos con cards modernas
  <section#contact>  → Contacto con links sociales
</main>
<footer>          → Footer minimalista
```

---

## Especificaciones por Sección

### `<header>` — Navegación
- Posición: `fixed` en la parte superior
- Efecto: `backdrop-filter: blur(20px)` + fondo semi-transparente
- Logo: Iniciales "MJ" con gradiente de acento
- Links de navegación: Inicio, Acerca de, Proyectos, Contacto
- Hamburger menu para mobile (toggle con JS)
- Indicador de scroll activo en el link actual

```html
<header id="navbar">
  <nav class="nav-container">
    <a href="#hero" class="nav-logo">MJ</a>
    <ul class="nav-links" id="nav-links">
      <li><a href="#hero"     class="nav-link" data-section="hero">Inicio</a></li>
      <li><a href="#about"    class="nav-link" data-section="about">Acerca de</a></li>
      <li><a href="#projects" class="nav-link" data-section="projects">Proyectos</a></li>
      <li><a href="#contact"  class="nav-link" data-section="contact">Contacto</a></li>
    </ul>
    <button class="nav-hamburger" id="nav-hamburger" aria-label="Abrir menú">
      <span></span><span></span><span></span>
    </button>
  </nav>
</header>
```

---

### `<section#hero>` — Hero Section
- Fondo: Gradiente oscuro + partículas decorativas (SVG o CSS)
- Texto: "Hola, soy" (pequeño, color muted) + nombre grande + título con typing animation
- Badge: Etiqueta tipo "chip" con "Disponible para proyectos"
- CTA buttons: "Ver proyectos" (primario) + "Contactar" (outline)
- Decoración: Círculos con blur de color de acento (blob effect)

```html
<section id="hero" class="section hero-section">
  <div class="hero-blobs">
    <div class="blob blob--1"></div>
    <div class="blob blob--2"></div>
  </div>
  <div class="hero-content">
    <div class="hero-badge">
      <span class="badge-dot"></span>
      Disponible para proyectos
    </div>
    <p class="hero-greeting">Hola, soy</p>
    <h1 class="hero-name">Miguel Angel<br>Jerónimo Díaz</h1>
    <h2 class="hero-title">
      <span class="typing-text" id="typing-text"></span>
      <span class="typing-cursor">|</span>
    </h2>
    <p class="hero-desc">Ingeniero en Sistemas Computacionales apasionado por crear
      experiencias digitales memorables y soluciones de software elegantes.</p>
    <div class="hero-cta">
      <a href="#projects" class="btn btn--primary">Ver Proyectos</a>
      <a href="#contact"  class="btn btn--outline">Contactar</a>
    </div>
  </div>
  <div class="hero-visual">
    <div class="avatar-container">
      <img src="img/cargo-generico-Mobile-Avatar.png" alt="Miguel Angel Jerónimo" class="avatar-img">
      <div class="avatar-ring"></div>
    </div>
  </div>
</section>
```

---

### `<section#about>` — Acerca de Mí
- Texto de la historia de Miguel (del HTML original, mejorado)
- Grid de skills/tecnologías con iconos
- Línea de tiempo de experiencia (opcional, como tarjetas)

```html
<section id="about" class="section about-section">
  <div class="section-container">
    <div class="section-header">
      <span class="section-tag">/ Acerca de</span>
      <h2 class="section-title">Mi Historia</h2>
    </div>
    <div class="about-grid">
      <div class="about-text">
        <p>Soy Ingeniero en Sistemas Computacionales, amante de la tecnología y el desarrollo de software...</p>
        <!-- Párrafos del About original mejorados -->
      </div>
      <div class="about-skills">
        <h3 class="skills-title">Tecnologías</h3>
        <div class="skills-grid">
          <!-- Tags de tecnologías -->
          <span class="skill-tag">PHP</span>
          <span class="skill-tag">Android</span>
          <span class="skill-tag">Java</span>
          <span class="skill-tag">JavaScript</span>
          <span class="skill-tag">HTML</span>
          <span class="skill-tag">CSS</span>
          <span class="skill-tag">Git</span>
          <span class="skill-tag">GitHub</span>
        </div>
      </div>
    </div>
  </div>
</section>
```

---

### `<section#projects>` — Proyectos
- Cards modernas con hover effect (lift + glow)
- Cada card: título, descripción, badges de tecnología, links a Play Store/GitHub

```html
<section id="projects" class="section projects-section">
  <div class="section-container">
    <div class="section-header">
      <span class="section-tag">/ Proyectos</span>
      <h2 class="section-title">Mi Trabajo</h2>
    </div>
    <div class="projects-grid">

      <!-- Proyecto: Ttools -->
      <article class="project-card" id="project-ttools">
        <div class="project-card__header">
          <div class="project-icon">🎮</div>
          <div class="project-links">
            <a href="#" class="project-link" aria-label="Ver en Play Store">
              <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" width="22" height="22" alt="Play Store">
            </a>
          </div>
        </div>
        <h3 class="project-card__title">Ttools</h3>
        <p class="project-card__desc">Aplicación gratuita de apoyo para jugadores de Tibia Online.
          Consulta precios de blessings, experiencia compartida y más utilidades del juego.</p>
        <div class="project-tags">
          <span class="project-tag">Android</span>
          <span class="project-tag">Java</span>
          <span class="project-tag">Tibia API</span>
        </div>
      </article>

      <!-- Proyecto: Shopping List -->
      <article class="project-card" id="project-shopping">
        <div class="project-card__header">
          <div class="project-icon">🛒</div>
          <div class="project-links">
            <a href="#" class="project-link" aria-label="Ver en Play Store">
              <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" width="22" height="22" alt="Play Store">
            </a>
          </div>
        </div>
        <h3 class="project-card__title">Shopping List</h3>
        <p class="project-card__desc">App de lista de compras inteligente. Crea listas, agrega productos
          con cantidad y precio, y obtén el cálculo total automático de tu compra.</p>
        <div class="project-tags">
          <span class="project-tag">Android</span>
          <span class="project-tag">Java</span>
          <span class="project-tag">SQLite</span>
        </div>
      </article>

    </div>
  </div>
</section>
```

---

### `<section#contact>` — Contacto
- Texto de invitación al contacto
- Email como link copiable (click to copy)
- Botones sociales: LinkedIn, GitHub

```html
<section id="contact" class="section contact-section">
  <div class="section-container">
    <div class="section-header">
      <span class="section-tag">/ Contacto</span>
      <h2 class="section-title">Trabajemos Juntos</h2>
    </div>
    <p class="contact-desc">¿Tienes un proyecto en mente? Me encantaría escucharte.
      Puedes contactarme por los siguientes medios:</p>
    <div class="contact-email" id="contact-email" title="Click para copiar">
      <span class="contact-email__icon">✉️</span>
      <span class="contact-email__text">miguelangeljd93@gmail.com</span>
      <span class="contact-email__copy">Copiar</span>
    </div>
    <div class="contact-social">
      <a href="https://www.linkedin.com/in/miguel-jer%C3%B3nimo-9877a9153/"
         id="linkedin" target="_blank" rel="noopener" class="social-btn social-btn--linkedin">
        <img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" width="24" height="24" alt="LinkedIn">
        LinkedIn
      </a>
      <a href="https://github.com/MiguelJeronimo"
         id="github" target="_blank" rel="noopener" class="social-btn social-btn--github">
        <img src="https://cdn-icons-png.flaticon.com/512/1051/1051326.png" width="24" height="24" alt="GitHub">
        GitHub
      </a>
    </div>
  </div>
</section>
```

---

### `<footer>` — Footer

```html
<footer class="footer">
  <div class="footer-container">
    <p class="footer-credits">
      Diseñado y construido con ❤️ por <strong>Miguel Angel Jerónimo</strong>
    </p>
    <nav class="footer-nav">
      <a href="#hero">Inicio</a>
      <a href="#about">Acerca de</a>
      <a href="#projects">Proyectos</a>
      <a href="#contact">Contacto</a>
    </nav>
    <p class="footer-copy">© 2024 Miguel Angel Jerónimo. Todos los derechos reservados.</p>
  </div>
</footer>
```

---

## Head Completo (Reemplazar)

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Portfolio de Miguel Angel Jerónimo Díaz, Ingeniero en Sistemas Computacionales y Desarrollador de Software especializado en Android y Web.">
  <meta name="keywords" content="desarrollador software, android, web, portfolio, Miguel Jeronimo">
  <meta name="author" content="Miguel Angel Jerónimo Díaz">
  <meta property="og:title" content="Miguel Angel Jerónimo — Developer Portfolio">
  <meta property="og:description" content="Portfolio de Miguel Angel Jerónimo Díaz, Desarrollador de Software.">
  <meta property="og:type" content="website">
  <title>Miguel Angel Jerónimo — Developer Portfolio</title>
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <!-- Styles -->
  <link rel="stylesheet" href="css/index.css">
  <link rel="stylesheet" href="css/animations.css">
</head>
```

---

## Instrucciones

1. Eliminar **completamente** el contenido actual de `index.html`
2. Construir desde cero con el nuevo HTML documentado aquí
3. Eliminar todas las referencias a MDL (`material.min.js`, `material.deep_purple-purple.min.css`)
4. Asegurarse de que cada sección tenga un `id` único para anclas de navegación
5. Verificar que todos los elementos interactivos tengan `id` únicos y descriptivos
6. Mantener el link de `js/index.js` al final del `<body>` (antes del cierre)
