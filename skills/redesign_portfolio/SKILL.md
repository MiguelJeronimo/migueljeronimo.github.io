---
name: redesign_portfolio
description: |
  Skill principal para rediseñar el sitio web portfolio de Miguel Angel Jerónimo.
  Orquesta todos los sub-skills del rediseño: diseño visual, estructura HTML, estilos CSS,
  interactividad JS y validación final. Úsalo cuando el usuario quiera rediseñar o actualizar
  el sitio completo.
---

# Skill: Rediseño de Portfolio — Miguel Angel Jerónimo

## Contexto del Proyecto

Este es el sitio web portfolio personal de **Miguel Angel Jerónimo Díaz**, Ingeniero en Sistemas Computacionales y Desarrollador de Software. El sitio está alojado en GitHub Pages en `migueljeronimo.github.io`.

### Estado Actual del Sitio
- **Framework UI**: Material Design Lite (MDL) v1.3.0 — librería desactualizada
- **Diseño**: Básico, sin animaciones, paleta de colores limitada
- **Estructura**: Una sola página (`index.html`) con secciones: Inicio, Acerca de, Proyectos y Contacto
- **CSS**: `css/index.css` (97 líneas), muy básico
- **JS**: `js/index.js` (64 líneas), solo navegación entre secciones y links sociales
- **Imagen**: `img/cargo-generico-Mobile-Avatar.png` — avatar genérico

### Proyectos del Portafolio
1. **Ttools** — App para el juego Tibia Online (precio de blessings, experiencia compartida, etc.)
2. **Shopping List** — App de lista de compras con cálculo de precios

### Contacto del Propietario
- Email: `miguelangeljd93@gmail.com`
- LinkedIn: `https://www.linkedin.com/in/miguel-jer%C3%B3nimo-9877a9153/`
- GitHub: `https://github.com/MiguelJeronimo`

---

## Objetivo del Rediseño

Transformar el sitio de un diseño básico MDL a un **portfolio moderno, premium y visualmente impresionante** usando únicamente HTML, CSS Vanilla y JavaScript puro (sin frameworks externos).

### Principios de Diseño
- **Dark mode** por defecto con acentos en gradientes vibrantes
- **Glassmorphism** en tarjetas y elementos flotantes
- **Micro-animaciones** en hover, scroll y carga de página
- **Tipografía moderna** desde Google Fonts (Inter o Outfit)
- **Responsive** con mobile-first approach
- **Sin dependencias externas** de CSS frameworks (eliminar MDL)

---

## Sub-Skills del Rediseño

Este skill orquesta los siguientes sub-skills en orden:

```
1. redesign_design_system    → Definir tokens, paleta de colores, tipografía
2. redesign_html_structure   → Reconstruir el HTML semántico
3. redesign_css_styles       → Implementar estilos modernos y animaciones
4. redesign_js_interactions  → Mejorar interactividad y scroll behavior
5. redesign_validation       → Verificar resultado final
```

---

## Instrucciones de Ejecución

Al ejecutar este skill principal:

1. **Lee** los sub-skills en el orden indicado
2. **Ejecuta** cada sub-skill secuencialmente
3. **Verifica** al final con `redesign_validation/SKILL.md`
4. **Reporta** un resumen de todos los cambios realizados

### Archivos a Modificar
| Archivo | Acción |
|---|---|
| `index.html` | Reemplazar completamente |
| `css/index.css` | Reemplazar completamente |
| `js/index.js` | Actualizar con nuevas funciones |
| `css/material.deep_purple-purple.min.css` | **Eliminar** (no se usará MDL) |

### Archivos a Crear
| Archivo | Propósito |
|---|---|
| `css/animations.css` | Animaciones y keyframes separados |
| `img/hero-bg.svg` | Fondo SVG para la sección hero |

---

## Referencias
- Ver `references/design_inspiration.md` para inspiración y paletas de color
- Ver `references/current_site_analysis.md` para análisis del sitio actual
