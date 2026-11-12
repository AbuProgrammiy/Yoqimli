# Yoqimli

A responsive, read-only restaurant website built with standalone Angular components.

## Run locally

```bash
npm install
npm start
```

Open `http://localhost:4200/`. To create a production build:

```bash
npm run build
```

## Updating content

- Menu items, prices, categories, and product photography URLs live in `src/app/menu-data.ts`.
- Replace `public/images/yoqimli-logo.png` to update the supplied brand logo.
- Restaurant address, hours, phone, and social links are in `src/app/app.html`.

Food photography is loaded from Unsplash; an internet connection is needed to display it.
