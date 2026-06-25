---
name: redesign_design_system
description: |
  Define el sistema de diseño completo para el portfolio: tokens de color, tipografía,
  espaciado, sombras y variables CSS. Debe ejecutarse PRIMERO antes de cualquier otro
  sub-skill de rediseño.
---

# Skill: Sistema de Diseño — Design System

## Objetivo

Definir todas las **variables CSS (design tokens)** que unificarán el diseño del portfolio.
Esto incluye paleta de colores, tipografía, espaciado, border-radius, sombras y transiciones.

---

## Paleta de Colores Propuesta

### Dark Mode (Principal)
```
Background Base:     #0a0a0f   (negro profundo con tinte azulado)
Background Surface:  #12121a   (superficie de tarjetas)
Background Card:     #1a1a2e   (tarjetas/glass)

Accent Primary:      #6c63ff   (violeta/índigo vibrante)
Accent Secondary:    #ff6b6b   (coral/rojo suave para contraste)
Accent Gradient:     linear-gradient(135deg, #6c63ff 0%, #a855f7 100%)

Text Primary:        #f0f0ff   (blanco con tinte violeta)
Text Secondary:      #8888aa   (gris azulado para textos secundarios)
Text Muted:          #4a4a6a   (texto deshabilitado o decorativo)

Border:              rgba(108, 99, 255, 0.15)  (borde sutil con color de acento)
Glass Background:    rgba(26, 26, 46, 0.7)     (glassmorphism)
Glass Border:        rgba(108, 99, 255, 0.2)   (borde del glass)
```

### Tokens para Éxito, Error, Advertencia
```
Success:  #4ade80   (verde vibrante)
Warning:  #fbbf24   (amarillo ámbar)
Error:    #f87171   (rojo suave)
```

---

## Tipografía

### Fuentes a Importar
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

### Escala Tipográfica
```
--font-family-primary:   'Outfit', sans-serif
--font-family-mono:      'JetBrains Mono', monospace

--font-size-xs:     0.75rem   (12px)
--font-size-sm:     0.875rem  (14px)
--font-size-base:   1rem      (16px)
--font-size-md:     1.125rem  (18px)
--font-size-lg:     1.25rem   (20px)
--font-size-xl:     1.5rem    (24px)
--font-size-2xl:    2rem      (32px)
--font-size-3xl:    2.5rem    (40px)
--font-size-4xl:    3.5rem    (56px)
--font-size-hero:   clamp(2.5rem, 6vw, 5rem)

--font-weight-light:    300
--font-weight-regular:  400
--font-weight-medium:   500
--font-weight-semibold: 600
--font-weight-bold:     700
--font-weight-extrabold:800

--line-height-tight:  1.2
--line-height-normal: 1.6
--line-height-relaxed:1.8
```

---

## Espaciado

```
--space-1:   0.25rem   (4px)
--space-2:   0.5rem    (8px)
--space-3:   0.75rem   (12px)
--space-4:   1rem      (16px)
--space-5:   1.25rem   (20px)
--space-6:   1.5rem    (24px)
--space-8:   2rem      (32px)
--space-10:  2.5rem    (40px)
--space-12:  3rem      (48px)
--space-16:  4rem      (64px)
--space-20:  5rem      (80px)
--space-24:  6rem      (96px)
--space-32:  8rem      (128px)
```

---

## Border Radius

```
--radius-sm:   4px
--radius-md:   8px
--radius-lg:   12px
--radius-xl:   16px
--radius-2xl:  24px
--radius-full: 9999px
```

---

## Sombras

```
--shadow-sm:   0 1px 3px rgba(0,0,0,0.4)
--shadow-md:   0 4px 20px rgba(0,0,0,0.5)
--shadow-lg:   0 8px 40px rgba(0,0,0,0.6)
--shadow-glow: 0 0 30px rgba(108, 99, 255, 0.3)   (brillo de acento)
--shadow-card: 0 4px 30px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255,255,255,0.05)
```

---

## Transiciones

```
--transition-fast:   all 0.15s ease
--transition-base:   all 0.3s ease
--transition-slow:   all 0.5s ease
--transition-spring: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)
```

---

## Variables CSS — Bloque `:root`

Implementar en la parte superior de `css/index.css`:

```css
:root {
  /* Colors */
  --color-bg:           #0a0a0f;
  --color-surface:      #12121a;
  --color-card:         #1a1a2e;
  --color-accent:       #6c63ff;
  --color-accent-2:     #a855f7;
  --color-accent-coral: #ff6b6b;
  --color-text:         #f0f0ff;
  --color-text-muted:   #8888aa;
  --color-text-faint:   #4a4a6a;
  --color-border:       rgba(108, 99, 255, 0.15);
  --color-glass:        rgba(26, 26, 46, 0.7);
  --color-glass-border: rgba(108, 99, 255, 0.2);
  --color-success:      #4ade80;
  --color-warning:      #fbbf24;
  --color-error:        #f87171;

  /* Gradients */
  --gradient-accent: linear-gradient(135deg, #6c63ff 0%, #a855f7 100%);
  --gradient-hero:   linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #0a0a0f 100%);
  --gradient-card:   linear-gradient(145deg, rgba(108,99,255,0.05) 0%, rgba(168,85,247,0.02) 100%);

  /* Typography */
  --font-primary:  'Outfit', sans-serif;
  --font-mono:     'JetBrains Mono', monospace;
  --text-hero:     clamp(2.5rem, 6vw, 5rem);
  --text-4xl:      3.5rem;
  --text-3xl:      2.5rem;
  --text-2xl:      2rem;
  --text-xl:       1.5rem;
  --text-lg:       1.25rem;
  --text-md:       1.125rem;
  --text-base:     1rem;
  --text-sm:       0.875rem;

  /* Spacing */
  --sp-4:   1rem;
  --sp-6:   1.5rem;
  --sp-8:   2rem;
  --sp-12:  3rem;
  --sp-16:  4rem;
  --sp-20:  5rem;
  --sp-24:  6rem;

  /* Border Radius */
  --radius-sm:   4px;
  --radius-md:   8px;
  --radius-lg:   12px;
  --radius-xl:   16px;
  --radius-2xl:  24px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-md:   0 4px 20px rgba(0, 0, 0, 0.5);
  --shadow-lg:   0 8px 40px rgba(0, 0, 0, 0.6);
  --shadow-glow: 0 0 30px rgba(108, 99, 255, 0.3);
  --shadow-card: 0 4px 30px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05);

  /* Transitions */
  --t-fast:   all 0.15s ease;
  --t-base:   all 0.3s ease;
  --t-slow:   all 0.5s ease;
  --t-spring: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
```

---

## Instrucciones

1. Añadir las fuentes en el `<head>` del HTML como link tags
2. Copiar el bloque `:root` al inicio de `css/index.css`
3. Configurar estilos globales del `body` con `background-color: var(--color-bg)` y `color: var(--color-text)`
4. Aplicar `font-family: var(--font-primary)` globalmente
5. Aplicar `box-sizing: border-box` a todos los elementos (`*, *::before, *::after`)
