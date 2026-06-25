# Análisis del Sitio Actual — migueljeronimo.github.io

## Información General

- **URL**: https://migueljeronimo.github.io
- **Propietario**: Miguel Angel Jerónimo Díaz
- **Tecnología actual**: Material Design Lite (MDL) v1.3.0
- **Año**: 2022 (última actualización visible)

## Estructura Actual

```
migueljeronimo.github.io/
├── index.html          (157 líneas)
├── css/
│   ├── index.css       (97 líneas)
│   └── material.deep_purple-purple.min.css  (141 KB — MDL)
├── js/
│   └── index.js        (64 líneas)
└── img/
    └── cargo-generico-Mobile-Avatar.png     (5.9 KB)
```

## Problemas Identificados

### Diseño
- ❌ Usa Material Design Lite, librería desactualizada y sin mantenimiento desde 2018
- ❌ Sin dark mode
- ❌ Sin animaciones de entrada o micro-interacciones
- ❌ Paleta de colores genérica y poco memorable
- ❌ Avatar genérico (no es foto real)
- ❌ Sin efecto de scroll en el navbar
- ❌ Tipografía de sistema (sin fuentes personalizadas)
- ❌ Hero section sin impacto visual

### HTML/SEO
- ❌ Sin meta description
- ❌ Sin Open Graph tags
- ❌ Estructura de headings inconsistente (h4, h6 en el hero)
- ❌ Texto "Tibia Online" y "Ttools" sin descripción SEO
- ❌ Footer muestra "2022" (desactualizado)
- ❌ Links del nav tienen href="" vacíos (solo JS los maneja)
- ❌ Sin atributo lang correcto para ES

### CSS
- ❌ CSS mínimo (97 líneas) con valores hardcodeados
- ❌ Sin variables CSS / design tokens
- ❌ Sin responsive real (depende de MDL grid)
- ❌ Clases sin metodología (mezcla de MDL y custom)
- ❌ Hay un selector con typo: `tarjeta-contacto` (sin punto de clase)

### JavaScript
- ❌ Código básico con switch/case para navegación
- ❌ Sin smooth scroll nativo mejorado
- ❌ Sin animaciones al hacer scroll
- ❌ Sin typing effect o elementos dinámicos
- ❌ Sin feedback visual en interacciones

## Contenido — Lo Que Se Debe Preservar

### Secciones
1. **Inicio/Hero** — Nombre, título de Desarrollador de Software
2. **Acerca de** — Historia personal y proyectos Android/PHP
3. **Proyectos** — Ttools (Tibia Online) + Shopping List
4. **Contacto** — Email + LinkedIn + GitHub

### Datos de Contacto
- Email: `miguelangeljd93@gmail.com`
- LinkedIn: `https://www.linkedin.com/in/miguel-jer%C3%B3nimo-9877a9153/`
- GitHub: `https://github.com/MiguelJeronimo`

### Texto del About (Original)
> "Mi nombre es Miguel soy ingeniero en sistemas computacionales amante de la tecnologia.
> Al egresar de la universidad, estuve trabajando durante 4 años en el area comercial de una compañia de 
> sistemas contra incendio, lo cual me llevo a adquirir ciertas habilidades como atencion al cliente, 
> seguimiento a las propuestas, etc. En dicha compañia desarrolle en mi tiempo libre una pequeña herramienta 
> web utilizando php para llevar un control de las cotizaciones que realizaba en mi puesto de trabajo.
> En la universidad lleve una asignatura donde se veia desarrollo en android, en ella desarrolle una app de 
> apoyo para un juego llamado Tibia Online, años mas tarde volvi a retomar el proyecto pero lo volvi a hacer 
> nuevamente desde cero para darle un mejor diseño, añadiendo tambien nuevas funcionalidades.
> Tambien desarrolle una app de lista de compras..."

## Tamaño del Proyecto Actual

| Recurso | Tamaño |
|---|---|
| index.html | 8 KB |
| css/index.css | 1.5 KB |
| css/material (MDL) | 141 KB |
| js/index.js | 1.7 KB |
| img/avatar | 6 KB |
| **Total** | **~158 KB** |

## Objetivo Post-Rediseño

- Eliminar los 141 KB de MDL
- CSS propio bien organizado (~15-20 KB)
- JS sin dependencias (~5-8 KB)
- Tiempo de carga < 1s en conexión normal
