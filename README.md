# GSM Soluciones Jurídicas — Sitio Web

## Tecnología
Astro 4 · HTML/CSS/JS estático · Sin framework de UI · Cloudflare Pages

---

## Requisitos previos
- Node.js 18 o superior → https://nodejs.org
- Git → https://git-scm.com
- Cuenta GitHub → https://github.com
- Cuenta Cloudflare Pages → https://pages.cloudflare.com

---

## Instalación local

```bash
# 1. Clonar el repositorio
git clone https://github.com/TU_USUARIO/gsm-sitio.git
cd gsm-sitio

# 2. Instalar dependencias
npm install

# 3. Servidor de desarrollo
npm run dev
# Abre http://localhost:4321
```

---

## Publicar en Cloudflare Pages (primera vez)

1. Sube el proyecto a GitHub
2. Entra a Cloudflare → Pages → **Create a project** → **Connect to Git**
3. Selecciona el repositorio
4. En **Build settings**:
   - Framework preset: `Astro`
   - Build command: `npm run build`
   - Build output directory: `dist`
5. Clic en **Save and Deploy**
6. Conecta el dominio `abogadosxelagsm.com` desde la pestaña **Custom domains**

---

## Actualizar el sitio (después de la primera vez)

```bash
# Edita los archivos que necesites
# Luego:
git add .
git commit -m "Descripción del cambio"
git push
```
Cloudflare detecta el push y redespliega automáticamente en ~1 minuto.

---

## Agregar un artículo al blog

1. Crea un archivo en `src/content/blog/nombre-del-articulo.md`
2. Agrega el frontmatter al inicio:

```markdown
---
titulo: "Título del artículo"
descripcion: "Descripción breve para Google (máx 160 caracteres)"
categoria: "Laboral"  # Opciones: Notarial | Familia | Laboral | Penal | Voluntaria | Municipal
fecha: 2025-06-01
destacado: false  # true = aparece destacado en blog e inicio
---

Aquí va el contenido en Markdown normal...

## Subtítulo

Párrafo de texto.

- Lista de elementos
- Otro elemento
```

3. Guarda, haz commit y push → el artículo aparece automáticamente.

---

## Estructura del proyecto

```
gsm-astro/
├── src/
│   ├── content/
│   │   └── blog/          ← Artículos en Markdown (.md)
│   ├── layouts/
│   │   ├── Base.astro     ← Nav + Footer compartido
│   │   └── Articulo.astro ← Layout para artículos del blog
│   ├── pages/
│   │   ├── index.astro    ← Inicio
│   │   ├── servicios.astro
│   │   ├── equipo.astro
│   │   ├── contacto.astro
│   │   └── blog/
│   │       ├── index.astro   ← Lista de artículos
│   │       └── [slug].astro  ← Artículo individual (automático)
│   └── styles/
│       └── global.css     ← Estilos globales GSM
├── public/                ← Imágenes y archivos estáticos
├── astro.config.mjs
└── package.json
```

---

## Contacto técnico
Desarrollado con Claude (Anthropic) para GSM Soluciones Jurídicas.
