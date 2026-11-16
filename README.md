# Product Expiry Tracker - Frontend

Frontend for the Product Expiry Tracker (PET) — a household inventory app that tracks product expiry dates and warns you a full week before anything expires.

## Tech Stack

- **React 19** — UI library
- **Vite 8** — build tool & dev server
- **Tailwind CSS 4** — styling (via `@tailwindcss/vite`)
- **React Router 8** — client-side routing
- **Axios** — HTTP client with JWT interceptors
- **Lucide React** — icons
- **Dayjs** — date handling
- **Zod** — form/schema validation
- **SweetAlert2** — toast & modal alerts
- **ESLint** — linting

## Project Structure

```
src/
  main.jsx          # Entry point
  index.css         # Tailwind imports + theme (Inter, Lora fonts)
  App.jsx           # Router + auth provider setup
  api/
    client.js       # Axios client placeholder
  components/       # Reusable UI components
    Navbar.jsx
    ProtectedRoute.jsx
    ProductForm.jsx
    ProductTable.jsx
    DashboardCard.jsx
    SearchBar.jsx
    StatusBadge.jsx
    NotificationsModal.jsx
    HeroSection.jsx
    InfoSection.jsx
    FeatureSection.jsx
    HowItWorks.jsx
    CallToActionSection.jsx
    FooterSection.jsx
    LandingSectionCard.jsx
  context/
    AuthContext.jsx # Auth state, login/register/logout, API client
  pages/            # Route pages
    LandingPage.jsx
    LoginPage.jsx
    RegisterPage.jsx
    Dashboard.jsx
    AddProductPage.jsx
    EditProductPage.jsx
    ProductDetailPage.jsx
  schemas/          # Zod validation schemas
    authSchema.js
    productSchema.js
  utils/
    formatDate.jsx  # Date formatting helper
```

## Features

- **Public landing page** — hero, info stats, features, how-it-works, CTA, footer
- **Authentication** — register, login, JWT stored in `localStorage`, auto session restore
- **Protected routes** — dashboard and product pages require login
- **Dashboard** — product inventory with metrics cards (Total / Fresh / Expiring Soon / Expired)
- **Product management** — add, view, edit, delete products
- **Search & filtering** — search by name/category/notes, filter by status and category
- **Expiry notifications** — 7-day advance warning logs with refresh
- **Responsive design** — mobile-first Tailwind layout

## Environment Variables

Create a `.env` file in the project root:

```env
VITE_APP_API_URL=https://your-backend-api.com/api
VITE_APP_API_URL_TEST=http://127.0.0.1:8000
```

`VITE_APP_API_URL` is used by `AuthContext` as the base URL for all API requests (with `withCredentials: true`).

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start dev server (port 3000) |
| `npm run build` | Production build via Vite |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview production build locally |

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Lint the codebase
npm run lint

# Build for production
npm run build

# Preview production build
npm run preview
```

The dev server runs on `http://localhost:3000` by default.

## Deployment

The project includes a `vercel.json` for SPA fallback routing (all routes rewrite to `index.html`). Deploy on Vercel or any static host that supports SPA redirects.

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```
