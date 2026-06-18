# SchoolLink – Landing Page

Landing page para SchoolLink construida con **Vue 3 + Vite + Tailwind CSS + vue-i18n**.

## Estructura del proyecto

```
schoollink/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── public/
└── src/
    ├── style.css
    ├── main.js
    ├── App.vue
    ├── assets/
    ├── i18n/
    │   ├── index.js      ← configuración i18n
    │   ├── es.js         ← traducciones en Español
    │   └── en.js         ← traducciones en Inglés
    └── components/
        ├── HeaderNav/
        │   └── HeaderNav.vue
        ├── Hero/
        │   └── Hero.vue
        ├── Solucion/
        │   └── Solucion.vue
        ├── Funcionamiento/
        │   └── Funcionamiento.vue
        ├── Nosotros/
        │   └── Nosotros.vue
        ├── Contacto/
        │   └── Contacto.vue
        └── Footer/
            └── Footer.vue
```

## Instalación y arranque

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build de producción
npm run build
```

## Funcionalidades

- ✅ **Responsive** – mobile-first con menú hamburguesa animado
- ✅ **i18n** – Español / Inglés, cambiable con el botón de globo
- ✅ **Tabs** – Soluciones para Profesor y para Padre
- ✅ **Scroll animations** – fade-up con IntersectionObserver
- ✅ **Formulario de contacto** – con estado de envío
- ✅ **Tailwind CSS** – con colores y fuentes personalizadas (Sora + DM Sans)

## Personalización

### Colores
Edita `tailwind.config.js` → `theme.extend.colors.brand`.

### Traducciones
Edita `src/i18n/es.js` y `src/i18n/en.js`.

### Agregar idioma
1. Crea `src/i18n/fr.js` con las traducciones.
2. Importa y registra en `src/i18n/index.js`.
3. Agrega el botón de cambio en `HeaderNav.vue`.
