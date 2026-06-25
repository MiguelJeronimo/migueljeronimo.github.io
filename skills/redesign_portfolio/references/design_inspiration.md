# Inspiración de Diseño — Portfolio Moderno

## Tendencias de Diseño Aplicadas

### 1. Dark Mode Premium
El portfolio usará un fondo negro-azulado profundo (#0a0a0f) que da sensación de profundidad y
profesionalismo. Los elementos flotarán sobre este fondo con efecto glassmorphism.

**Referencias de paleta dark**:
- Fondo base: `#0a0a0f` (negro con tinte azulado)
- Superficie: `#12121a` (para secciones alternas)
- Cards: `#1a1a2e` (ligeramente más claro)

### 2. Glassmorphism
Las tarjetas de proyectos y elementos flotantes usarán el efecto cristal:
```css
background: rgba(26, 26, 46, 0.7);
backdrop-filter: blur(20px);
border: 1px solid rgba(108, 99, 255, 0.2);
```

### 3. Gradientes de Acento Vibrantes
Violeta/índigo como color primario de acento, con gradiente hacia púrpura:
```css
background: linear-gradient(135deg, #6c63ff 0%, #a855f7 100%);
```

Este color:
- Es diferenciador y memorable
- Funciona bien sobre fondos oscuros
- Transmite creatividad y tecnología

### 4. Tipografía "Outfit"
- Moderna, geométrica y muy legible
- Soporta pesos desde 300 hasta 800
- Perfecta para títulos grandes con `font-weight: 800` y `letter-spacing: -2px`

### 5. Blob Effects
Formas orgánicas difuminadas en el fondo del hero:
```css
border-radius: 50%;
filter: blur(80px);
opacity: 0.15;
animation: blobFloat 8s ease-in-out infinite;
```

Estas formas dan dinamismo sin ser distractoras.

### 6. Micro-animaciones
- **Hover en cards**: `translateY(-8px)` + glow de acento
- **Hover en botones**: `translateY(-2px)` + shadow de color
- **Hover en skill tags**: `translateY(-2px)`
- **Nav link underline**: Crecimiento de izquierda a derecha

### 7. Typing Effect en el Hero
El subtítulo rota entre strings de forma fluida:
- "Desarrollador de Software"
- "Ingeniero en Sistemas"
- "Mobile Developer"
- "Web Developer"
- "Problem Solver"

### 8. IntersectionObserver para Scroll Animations
Elementos que aparecen con animación suave al entrar al viewport, en lugar de cargar
todo de golpe. Esto hace la experiencia de scroll más interesante.

---

## Portfolios de Referencia (Estilo)

### Elementos comunes en portfolios premium 2024:
1. **Hero section** con nombre grande + typing subtitle + CTA buttons
2. **Bento grid** o cards glassmorphism para proyectos
3. **Scroll-triggered animations** (IntersectionObserver)
4. **Floating navbar** con blur + active link indicator
5. **Section tags** en monospace: `/ Acerca de`, `/ Proyectos`
6. **Skill tags** tipo chips con border + glassmorphism
7. **Badge de disponibilidad** con punto pulsante verde
8. **Copy-to-clipboard** en el email de contacto

---

## Paleta de Colores Completa

```
Nombre              Valor           Uso
────────────────────────────────────────────────────────
bg-base             #0a0a0f         Fondo de la página
bg-surface          #12121a         Secciones alternas
bg-card             #1a1a2e         Tarjetas y modales
accent-primary      #6c63ff         Color de acento principal
accent-secondary    #a855f7         Gradiente de acento
accent-coral        #ff6b6b         Acentos alternativos
text-primary        #f0f0ff         Texto principal
text-secondary      #8888aa         Texto secundario
text-faint          #4a4a6a         Texto muy tenue
success             #4ade80         Estados positivos, badge
warning             #fbbf24         Advertencias
error               #f87171         Errores
border              rgba(108,99,255,0.15)  Bordes sutiles
glass               rgba(26,26,46,0.7)    Glass elements
glass-border        rgba(108,99,255,0.2)  Bordes glass
```

---

## Comparación: Antes vs Después

| Aspecto | Antes (MDL) | Después (Rediseño) |
|---|---|---|
| Paleta | Violeta genérico MDL | Dark mode personalizado + acento vibrante |
| Tipografía | Roboto (MDL default) | Outfit (Google Fonts) |
| Animaciones | Ninguna | Typing, scroll, hover, blobs |
| Cards proyectos | Texto plano en grid MDL | Glassmorphism cards con hover glow |
| Navbar | Tabs MDL horizontales | Floating navbar con blur y active indicator |
| Responsive | Grid MDL | CSS Grid/Flex custom + hamburger menu |
| Peso total | ~158 KB | ~30-40 KB (sin MDL) |
| SEO | Sin meta tags | Meta description, OG tags, semántica correcta |
| Interactividad | Scroll básico | IntersectionObserver, copy email, smooth scroll |
