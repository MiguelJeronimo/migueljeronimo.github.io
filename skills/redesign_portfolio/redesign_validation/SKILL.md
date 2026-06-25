---
name: redesign_validation
description: |
  Valida que el rediseño del portfolio esté completamente implementado y funcional.
  Verifica estructura HTML, estilos CSS, interacciones JS, responsive design y SEO.
  Debe ejecutarse COMO ÚLTIMO PASO después de todos los demás sub-skills.
---

# Skill: Validación — Verificación del Rediseño Completo

## Objetivo

Verificar que todos los cambios del rediseño estén implementados correctamente, que el sitio
funcione sin errores, sea responsive y cumpla los estándares de calidad definidos.

---

## Checklist de Validación

### ✅ Archivos y Estructura

- [ ] `index.html` — Reescrito completamente (sin referencias a MDL)
- [ ] `css/index.css` — Contiene el bloque `:root` con variables y todos los estilos
- [ ] `css/animations.css` — Creado con keyframes y clases de animación
- [ ] `js/index.js` — Reescrito con todas las nuevas funciones
- [ ] `css/material.deep_purple-purple.min.css` — Eliminado del directorio `css/`
- [ ] NO hay referencias a `material.min.js` en el HTML
- [ ] NO hay referencias a `material.deep_purple-purple.min.css` en el HTML

### ✅ HTML — SEO y Semántica

- [ ] `<meta charset="UTF-8">` presente
- [ ] `<meta name="viewport">` presente y correcta
- [ ] `<meta name="description">` con descripción relevante
- [ ] `<meta name="author">` con el nombre del autor
- [ ] `<meta property="og:title">` y `<meta property="og:description">` presentes
- [ ] Un solo `<h1>` en la página (el nombre en la hero section)
- [ ] `<title>` descriptivo y relevante
- [ ] Fuentes de Google Fonts correctamente enlazadas
- [ ] Links de CSS y JS correctamente referenciados
- [ ] Elementos con `id` únicos para todos los elementos interactivos
- [ ] Atributos `alt` en todas las imágenes
- [ ] Atributos `aria-label` en botones de iconos
- [ ] `rel="noopener"` en links externos con `target="_blank"`

### ✅ CSS — Diseño y Variables

- [ ] Bloque `:root` completo con todas las variables CSS
- [ ] Fuente `Outfit` aplicada globalmente
- [ ] `box-sizing: border-box` en reset
- [ ] `scroll-behavior: smooth` en `html`
- [ ] Dark mode activo (fondo `#0a0a0f` o `var(--color-bg)`)
- [ ] Navbar con efecto glassmorphism (`backdrop-filter: blur`)
- [ ] Blobs/decoraciones en la hero section
- [ ] Avatar con `border-radius` de forma orgánica
- [ ] Typing cursor animado
- [ ] Project cards con hover effect (lift + glow)
- [ ] Skill tags con hover effect
- [ ] Botones con transiciones suaves
- [ ] Contact email con hover y feedback de copia
- [ ] Footer minimalista y correcto

### ✅ CSS — Responsive

- [ ] Navbar colapsa a hamburger en `max-width: 768px`
- [ ] Hero section en columna en mobile
- [ ] About grid en columna en mobile
- [ ] Projects grid en columna en mobile
- [ ] Tipografía ajustada con `clamp()` para hero name
- [ ] Botones en columna en mobile (`max-width: 480px`)

### ✅ JavaScript — Funcionalidades

- [ ] `initNavbar()` — Navbar agrega clase `scrolled` al hacer scroll
- [ ] `initHamburger()` — Menu mobile toggle funciona
- [ ] `initTypingEffect()` — Texto en hero subtitle rota entre strings
- [ ] `initScrollAnimations()` — Elementos aparecen con animación al hacer scroll
- [ ] `initSmoothScroll()` — Clicks en links de nav hacen smooth scroll
- [ ] `initCopyEmail()` — Click en email lo copia al portapapeles
- [ ] `initActiveSection()` — Nav link activo se resalta según sección visible
- [ ] `initSocialLinks()` — LinkedIn y GitHub abren correctamente
- [ ] Sin errores en consola del navegador

### ✅ Animaciones

- [ ] Clases `animate-fade-up`, `animate-slide-left`, `animate-slide-right`, `animate-scale` aplicadas a elementos clave
- [ ] Delays escalonados (`delay-100` a `delay-500`) en listas y grids
- [ ] Blobs animados con `blobFloat` keyframe
- [ ] Ring del avatar con `ringPulse`
- [ ] Badge dot con `dotPulse`
- [ ] Cursor de typing con `cursorBlink`

### ✅ Performance y Accesibilidad

- [ ] Imágenes con atributos `alt` correctos
- [ ] Links sociales tienen `aria-label`
- [ ] Hamburger button tiene `aria-label` y `aria-expanded`
- [ ] Contraste de colores suficiente (texto claro sobre fondo oscuro)
- [ ] Sin scroll horizontal en ningún breakpoint
- [ ] Navegación completa con teclado posible
- [ ] `@media (prefers-reduced-motion)` considerado (opcional pero recomendado)

---

## Comandos de Verificación

### Abrir el sitio localmente
Abrir `index.html` directamente en el navegador o usar un servidor local:

```bash
# Con Python (si está instalado):
python -m http.server 8080

# Con Node.js / npx:
npx -y serve .
```

### Verificar en múltiples tamaños
Probar en Chrome DevTools con:
- Mobile: 375px × 812px (iPhone 12)
- Tablet: 768px × 1024px (iPad)
- Desktop: 1440px × 900px

### Verificar en la consola del navegador
Abrir DevTools (F12) y verificar que la consola muestre:
```
✨ Portfolio de Miguel Angel Jerónimo cargado correctamente.
```
Y que **no haya errores** en rojo.

---

## Criterios de Aceptación

El rediseño se considera **exitoso** cuando:

1. ✅ El sitio carga correctamente sin errores de consola
2. ✅ El diseño dark mode es visualmente premium e impactante
3. ✅ Las animaciones son suaves y no causan layout shift
4. ✅ El typing effect funciona y rota correctamente
5. ✅ La navegación hace smooth scroll a cada sección
6. ✅ El navbar resalta el link de la sección visible
7. ✅ En mobile, el menú hamburger funciona correctamente
8. ✅ El email se copia al portapapeles con feedback visual
9. ✅ Los links de LinkedIn y GitHub abren correctamente
10. ✅ El sitio es completamente responsive sin scroll horizontal

---

## Reporte Final

Al finalizar la validación, generar un reporte con:
- ✅ Items completados exitosamente
- ⚠️ Items con advertencias menores
- ❌ Items que requieren corrección

Si hay items ❌, corregirlos antes de considerar el rediseño como completo.
