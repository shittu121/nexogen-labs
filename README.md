# NEXOGEN Labs Landing Page

A modern, professional landing page for **NEXOGEN**, a pharmaceutical and performance enhancement brand. Built with Next.js, Tailwind CSS, Framer Motion, and Lucide icons.

## Features
- **Responsive design**: Looks great on all devices
- **Animated hamburger menu** for mobile navigation
- **Product showcase** with images, facts, and descriptions
- **Contact section** with ProtonMail and Discord links
- **Custom logo** support (edit `/public/logo.png`)
- **Modern, pharmaceutical-inspired UI**

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run the development server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the site.

## Adding/Changing Product Images
- Place your product images in the `public/` directory (e.g. `public/tirzepitide.png`, `public/retatrutide.png`, `public/testosterone.png`).
- Update the `image` property for each product in `src/components/Homepage.tsx` if you change filenames.

## Customizing the Logo
- Replace `/public/logo.png` with your own logo file for instant branding.
- The logo is displayed in the navigation bar and is sized for best appearance.

## Project Structure
- `src/components/Homepage.tsx` — Main landing page component
- `public/` — Static assets (logo, product images)
- `src/app/` — Next.js app directory

## Tech Stack
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)

## License
All rights reserved. For inquiries, contact: [nexogenlabs@proton.me](mailto:nexogenlabs@proton.me)
