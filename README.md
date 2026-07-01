# FleetFlow Marketing Website

Production-quality customer-facing logistics marketing website built with React 19, Vite, TypeScript, Tailwind CSS, React Router, shadcn/ui patterns, Framer Motion, and Lucide React.

## Tech Stack

- **React 19** + **Vite** + **TypeScript**
- **Tailwind CSS v4** with CSS variable theming
- **React Router v7** with lazy-loaded routes
- **shadcn/ui** component patterns (Radix UI primitives)
- **Framer Motion** for animations
- **Lucide React** for icons

## Getting Started

```bash
npm install
npm run dev
```

```bash
npm run build   # Production build
npm run preview # Preview production build
```

## Project Structure

```
src/
├── app/                    # Application shell
│   ├── App.tsx             # Root app component
│   └── router.tsx          # Route definitions (lazy-loaded)
├── assets/                 # Static assets (images, icons)
├── components/
│   ├── common/             # Shared non-UI components (PageLoader)
│   ├── layout/             # Global layout (Navbar, Footer, RootLayout)
│   ├── theme/              # Theme provider & toggle
│   └── ui/                 # Reusable UI primitives (Button, Container, SectionTitle)
├── config/
│   ├── routes.ts           # Route paths & navigation config
│   └── site.ts             # Site metadata & branding
├── hooks/
│   └── use-theme.ts        # Dark mode hook & ThemeProvider
├── lib/
│   └── utils.ts            # cn() utility for class merging
├── pages/
│   ├── Home/               # Home page + section components
│   │   ├── HomePage.tsx
│   │   └── sections/
│   └── NotFound/           # 404 page
├── styles/
│   └── globals.css         # Tailwind, CSS variables, base styles
└── main.tsx                # Entry point
```

## Features

- Modern SaaS design with logistics-focused branding
- Fully responsive layout (mobile-first)
- Dark mode with system preference support
- WCAG-friendly accessibility (skip links, ARIA labels, focus states)
- SEO-ready HTML structure with meta tags
- Lazy-loaded routes with Suspense fallbacks
- Framer Motion entrance animations
- Component-driven architecture

## Brand

The project uses **FleetFlow** as the placeholder brand name. Update `src/config/site.ts` to customize branding, contact info, and social links.
