# Developer Portfolio

A modern, fully responsive personal portfolio website built with **React**, **Vite**, and **Tailwind CSS**. It showcases a developer's profile, skills, projects, education, and contact information — ready to deploy to Vercel, Netlify, or Render.

**Live sections:** Navbar · Hero · About · Skills · Projects · Education · Contact · Footer

## Features

- ⚡ Built with Vite for a fast dev/build experience
- 🎨 Styled entirely with Tailwind CSS (utility-first, mobile-first)
- 🌗 Light/Dark mode toggle
- 📱 Fully responsive: mobile (320px+), tablet, laptop, and desktop
- ♿ Accessible markup with semantic HTML and ARIA labels
- 🧭 Smooth-scrolling navigation with active-section highlighting
- 🧩 Clean, modular, component-based architecture
- 🧾 Client-side contact form (no backend required — easy to wire up to a service like Formspree, EmailJS, or your own API)
- 🚀 Deployment-ready for Vercel, Netlify, and Render

## Tech Stack

- [React 18](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Framer Motion](https://www.framer.com/motion/) (available for advanced animation, optional)

## Project Structure

```
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Education.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
│
├── assets/
│
├── data/
│   └── portfolioData.js   # All editable content lives here
│
├── App.jsx
├── main.jsx
└── index.css
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- npm (comes with Node.js)

### Installation

```bash
# Clone or download this repository, then:
cd portfolio
npm install
```

### Running Locally

```bash
npm run dev
```

This starts a local dev server (default: `http://localhost:5173`) with hot module reloading.

### Building for Production

```bash
npm run build
```

This generates an optimized static build in the `dist/` folder.

To preview the production build locally:

```bash
npm run preview
```

## Customizing Your Portfolio

Almost all content — your name, title, bio, skills, projects, education, and contact info — lives in a single file:

```
src/data/portfolioData.js
```

Edit that file to personalize the site. To add a profile photo, place an image in `src/assets/`, import it at the top of `portfolioData.js`, and set it as the `avatar` value. To add your real resume, replace `public/resume.pdf` with your own PDF (keep the same filename, or update `resumeUrl` in `portfolioData.js`).

## Deployment

### Deploy to Vercel

1. Push this project to a GitHub/GitLab/Bitbucket repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects the Vite framework preset. Confirm the settings:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Click **Deploy**.

A `vercel.json` file is included to handle client-side routing rewrites correctly.

### Deploy to Netlify

1. Push the project to a Git repository.
2. Go to [app.netlify.com](https://app.netlify.com/) → **Add new site** → **Import an existing project**.
3. Set:
   - **Build Command:** `npm run build`
   - **Publish Directory:** `dist`
4. Click **Deploy site**.

### Deploy to Render

1. Push the project to a Git repository.
2. Go to [render.com](https://render.com/) → **New** → **Static Site**.
3. Set:
   - **Build Command:** `npm run build`
   - **Publish Directory:** `dist`
4. Click **Create Static Site**.

## License

This project is free to use and modify for your personal portfolio.
