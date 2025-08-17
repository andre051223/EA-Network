# 🌟 EA Network LATAM

<div align="center">

![EA Network Logo](img/Logo_EANetwork.png)

**Construyendo la Red de Asistentes Ejecutivos más grande de América Latina**

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](package.json)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE.txt)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Webpack](https://img.shields.io/badge/Webpack-8DD6F9?logo=webpack&logoColor=black)](https://webpack.js.org/)

</div>

---

## 📋 Tabla de Contenidos

- [🎯 Descripción del Proyecto](#-descripción-del-proyecto)
- [✨ Características Principales](#-características-principales)
- [🏗️ Arquitectura del Proyecto](#️-arquitectura-del-proyecto)
- [🚀 Instalación y Configuración](#-instalación-y-configuración)
- [💻 Uso y Desarrollo](#-uso-y-desarrollo)
- [📱 Responsive Design](#-responsive-design)
- [🎨 Sistema de Diseño](#-sistema-de-diseño)
- [📁 Estructura del Proyecto](#-estructura-del-proyecto)
- [🔧 Tecnologías Utilizadas](#-tecnologías-utilizadas)
- [📖 Guía de Contribución](#-guía-de-contribución)
- [📞 Contacto](#-contacto)
- [📄 Licencia](#-licencia)

---

## 🎯 Descripción del Proyecto

**EA Network LATAM** es una landing page corporativa moderna y completamente responsive para la red de Asistentes Ejecutivos más grande de América Latina. El sitio web está diseñado para conectar profesionales, ofrecer capacitaciones especializadas y proporcionar oportunidades de crecimiento en la industria.

### 🎯 Objetivos del Proyecto

- 🤝 **Conectar** profesionales de la industria de asistentes ejecutivos
- 📚 **Capacitar** a través de programas educativos especializados  
- 💼 **Oportunidades** de trabajo y crecimiento profesional
- 🎙️ **Inspirar** a través de podcast y contenido de valor
- 🤝 **Alianzas** estratégicas con empresas e instituciones

---

## ✨ Características Principales

### 🌐 **Secciones del Sitio**

| Sección | Descripción | Características |
|---------|-------------|-----------------|
| **🏠 Hero** | Presentación principal | Call-to-action, títulos impactantes |
| **👥 Nosotros** | Información de la organización | Grid de beneficios con imágenes profesionales |
| **📚 Capacitaciones** | Programas educativos | Partnership con Platzi, diseño 2-columnas |
| **💼 Oportunidades** | Ofertas laborales | Conexión LinkedIn, layout invertido |
| **🎙️ Podcast** | Contenido de audio | Lista de características, CTA destacado |
| **🤝 Alianzas** | Partnerships estratégicos | Perfil fundadora + formulario compacto |
| **📝 Registro** | Formularios de membresía | Dual registration (EA + Empresas) |

### 🛠️ **Funcionalidades Técnicas**

- ✅ **100% Responsive** - Adaptado para todos los dispositivos
- ✅ **Mobile First** - Diseño prioritario para móviles  
- ✅ **Navigation suave** - Scroll animado entre secciones
- ✅ **Hamburger Menu** - Menú móvil completamente funcional
- ✅ **Form validation** - Validación HTML5 y JavaScript
- ✅ **Performance optimized** - Imágenes y código optimizados
- ✅ **SEO Ready** - Meta tags y estructura semántica
- ✅ **Accessibility** - ARIA labels y navegación por teclado

---

## 🏗️ Arquitectura del Proyecto

### 📐 **Principios de Diseño**

- **Mobile First**: Diseño inicial para móviles, escalando a desktop
- **Progressive Enhancement**: Funcionalidades que se agregan por capas
- **Component Based**: Estructura modular y reutilizable
- **Performance First**: Optimización de carga y renderizado

### 🎨 **Sistema de Colores**

```css
:root {
  --primary-blue: #1a365d;      /* Azul principal corporativo */
  --secondary-blue: #2c5282;    /* Azul secundario para hover */
  --accent-gold: #d69e2e;       /* Dorado para highlights */
  --light-gray: #f7fafc;        /* Fondo de tarjetas */
  --medium-gray: #a0aec0;       /* Texto secundario */
  --dark-gray: #2d3748;         /* Texto principal */
  --white: #ffffff;             /* Fondo principal */
}
```

### 📱 **Breakpoints Responsive**

| Dispositivo | Breakpoint | Características |
|------------|------------|-----------------|
| **Desktop** | `>1024px` | Layout completo, todas las funcionalidades |
| **Tablet** | `769px - 1024px` | Grid adaptado, espaciado optimizado |
| **Mobile** | `≤768px` | Single column, menú hamburger |
| **Small Mobile** | `≤480px` | Texto y spacing ultra-compacto |

---

## 🚀 Instalación y Configuración

### 📋 **Requisitos Previos**

- **Node.js** v16+ 
- **npm** v8+
- Navegador moderno (Chrome, Firefox, Safari, Edge)

### ⚡ **Instalación Rápida**

```bash
# 1. Clonar el repositorio
git clone https://github.com/tu-usuario/ea-network-latam.git
cd ea-network-latam

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev

# 4. Abrir en navegador
# http://localhost:8080
```

### 🔧 **Scripts Disponibles**

```bash
npm run dev      # Servidor desarrollo con hot reload
npm run start    # Servidor desarrollo (alternativo)
npm run build    # Build de producción optimizado
npm test         # Ejecutar tests (pendiente implementación)
```

---

## 💻 Uso y Desarrollo

### 🎯 **Desarrollo Local**

1. **Servidor de desarrollo**:
   ```bash
   npm run dev
   ```
   - Auto-reload en cambios
   - Source maps para debugging
   - Puerto: `localhost:8080`

2. **Build de producción**:
   ```bash
   npm run build
   ```
   - Código minificado
   - Optimización de imágenes
   - Output: `dist/` folder

### 📝 **Modificaciones Comunes**

#### ✏️ **Agregar nueva sección**

1. **HTML**: Agregar sección en `index.html`
   ```html
   <section id="nueva-seccion" class="nueva-seccion">
     <section class="container">
       <!-- Contenido -->
     </section>
   </section>
   ```

2. **CSS**: Agregar estilos en `css/style.css`
   ```css
   .nueva-seccion {
     padding: 40px 0;
     /* Estilos específicos */
   }
   ```

3. **Navigation**: Actualizar menú en header
   ```html
   <li><a href="#nueva-seccion" class="nav-link">Nueva Sección</a></li>
   ```

#### 🎨 **Personalizar colores**

Modificar variables CSS en `css/style.css`:
```css
:root {
  --primary-blue: #tu-color-primario;
  --accent-gold: #tu-color-acento;
}
```

---

## 📱 Responsive Design

### 📐 **Grid System**

El sitio utiliza **CSS Grid** y **Flexbox** para layouts responsive:

```css
.grid-2-columns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

@media (max-width: 768px) {
  .grid-2-columns {
    grid-template-columns: 1fr;
  }
}
```

### 📱 **Mobile Navigation**

- **Hamburger menu** completamente funcional
- **Smooth scroll** entre secciones
- **Touch-friendly** botones y enlaces
- **Z-index** hierarchy para overlays

### 🖼️ **Imágenes Responsive**

Todas las imágenes están optimizadas para diferentes densidades de pantalla:
```html
<img src="imagen.jpg" alt="Descripción" loading="lazy">
```

---

## 🎨 Sistema de Diseño

### 🎭 **Typography Scale**

| Elemento | Desktop | Tablet | Mobile |
|----------|---------|--------|---------|
| **Hero Title** | 3.5rem | 3rem | 2.5rem |
| **Section Title** | 2.5rem | 2.2rem | 2rem |
| **Subtitle** | 1.25rem | 1.1rem | 1.1rem |
| **Body Text** | 1rem | 1rem | 1rem |

### 🎨 **Component Library**

#### 🔘 **Buttons**

```css
.btn-primary    /* Botón principal azul */
.btn-secondary  /* Botón secundario outline */
.btn-outline    /* Botón outline dorado */
.btn-full       /* Botón ancho completo */
```

#### 📝 **Forms**

```css
.compact-form      /* Formulario compacto */
.compact-field     /* Campo individual */
.compact-row       /* Fila de campos (2 columnas) */
```

#### 📦 **Cards**

```css
.registration-card  /* Tarjeta de registro */
.founder-card      /* Tarjeta de fundadora */
.about-item        /* Item de beneficios */
```

---

## 📁 Estructura del Proyecto

```
ea-network-latam/
├── 📄 index.html              # Página principal
├── 📁 css/
│   └── 🎨 style.css           # Estilos principales
├── 📁 js/
│   ├── ⚡ app.js              # JavaScript principal
│   └── 📁 vendor/             # Librerías externas
├── 📁 img/                    # Imágenes y assets
│   ├── 🖼️ Logo_EANetwork.png
│   ├── 🖼️ capacitacion-*.jpg
│   ├── 🖼️ LuisaLeon.png
│   └── 🖼️ social-icons/
├── 📁 dist/                   # Build de producción
├── 🔧 webpack.*.js            # Configuraciones Webpack
├── 📦 package.json            # Dependencias y scripts
├── 📝 README.md               # Esta documentación
└── ⚖️ LICENSE.txt             # Licencia MIT
```

### 📋 **Archivos Principales**

| Archivo | Función | Líneas | Responsabilidad |
|---------|---------|--------|-----------------|
| `index.html` | Estructura HTML | ~460 | Contenido y semántica |
| `css/style.css` | Estilos CSS | ~1300+ | Diseño y responsive |
| `js/app.js` | JavaScript | ~360+ | Interactividad y forms |

---

## 🔧 Tecnologías Utilizadas

### 🌐 **Frontend Core**
- **HTML5** - Estructura semántica y accesible
- **CSS3** - Estilos modernos con Grid/Flexbox  
- **JavaScript ES6+** - Interactividad y validaciones
- **Google Fonts** - Tipografía Montserrat

### 🛠️ **Build Tools**
- **Webpack 5** - Module bundler y task runner
- **Webpack Dev Server** - Desarrollo con hot reload
- **HTML Webpack Plugin** - Generación automática de HTML
- **Copy Webpack Plugin** - Copia de assets estáticos

### 📱 **Features**
- **CSS Grid & Flexbox** - Layout responsive moderno
- **CSS Custom Properties** - Sistema de variables
- **Intersection Observer API** - Animaciones on scroll
- **HTML5 Form Validation** - Validación nativa
- **Smooth Scrolling** - Navegación fluida

### 🎨 **Design System**
- **Mobile First** - Responsive design approach
- **Progressive Enhancement** - Capas de funcionalidad
- **BEM Methodology** - Nomenclatura CSS organizada
- **Semantic HTML** - Estructura accesible

---

## 📖 Guía de Contribución

### 🤝 **Contribuir al Proyecto**

1. **Fork** el repositorio
2. **Clone** tu fork local
3. **Branch** para tu feature: `git checkout -b feature/nueva-funcionalidad`
4. **Commit** cambios: `git commit -m "Add: nueva funcionalidad"`  
5. **Push** al branch: `git push origin feature/nueva-funcionalidad`
6. **Pull Request** con descripción detallada

### 📝 **Estándares de Código**

#### HTML
- Usar etiquetas semánticas (`<section>`, `<article>`, `<nav>`)
- Incluir atributos `alt` en imágenes
- Validar con W3C Markup Validator

#### CSS
- Mobile First approach
- Usar CSS Custom Properties para colores
- Nomenclatura BEM para clases
- Comentarios para secciones principales

#### JavaScript
- ES6+ syntax
- Const/let en lugar de var
- Funciones puras cuando sea posible
- Comentarios JSDoc para funciones

### 🐛 **Reportar Issues**

Al reportar un bug, incluir:
- **OS y navegador** (versión específica)
- **Pasos para reproducir** el problema
- **Screenshots** si aplica
- **Comportamiento esperado** vs actual

---

## 📞 Contacto

### 👥 **Equipo EA Network LATAM**

- 📧 **Email**: contacto@eanetwork-latam.com
- 🌐 **Website**: [www.eanetwork-latam.com](https://www.eanetwork-latam.com)
- 💼 **LinkedIn**: [EA Network LATAM](https://linkedin.com/company/ea-network-latam)
- 📱 **WhatsApp**: +57 XXX XXX XXXX

### 👩‍💼 **Fundadora**
**Luisa León**  
Fundadora EA Network LATAM  
🔗 [LinkedIn Profile](https://www.linkedin.com/in/luisa-leon)

### 🤝 **Alianzas y Partnerships**
Para propuestas de colaboración, usar el formulario en la sección [Alianzas](#alianzas) del sitio web.

---

## 📄 Licencia

Este proyecto está licenciado bajo la **Licencia MIT** - ver el archivo [LICENSE.txt](LICENSE.txt) para más detalles.

```
MIT License

Copyright (c) 2024 EA Network LATAM

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---


**🌟 ¿Te gusta el proyecto? ¡Déjanos una estrella! ⭐**

**Construido con ❤️ por el equipo EA Network LATAM**

---

*Última actualización: Agosto 2025*

</div>