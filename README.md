# Paul Ginting Portfolio

A dark, elegant one-page musician portfolio designed for mobile and desktop and ready for Vercel.

## Run locally

```bash
npm install
npm run dev
```

## Deploy to Vercel

1. Upload this folder to GitHub.
2. Open Vercel and choose **Add New → Project**.
3. Import the GitHub repository.
4. Click **Deploy**.

The project uses static export, so no server configuration is required.

## Customize

Edit `app/page.tsx` for your name, biography and links.

Replace the CSS background in `.hero-bg` with your own photo if desired, for example:

```css
.hero-bg{background-image:linear-gradient(...),url('/profile.jpg');background-size:cover;background-position:center;}
```

Put the photo at `public/profile.jpg`.

Replace the placeholder WhatsApp number in `app/page.tsx` with your real number.
