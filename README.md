<div align="center">

<img src="public/logo.svg" alt="Borcelle logo" width="90" />

# Borcelle

**A modern, bilingual (English / Arabic) e-commerce marketplace front-end with a full admin dashboard.**

Built with React 19, Vite, Tailwind CSS 4 and Material UI.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![MUI](https://img.shields.io/badge/MUI-9-007FFF?logo=mui&logoColor=white)
![i18next](https://img.shields.io/badge/i18n-EN%20%7C%20AR-26A69A)
![License](https://img.shields.io/badge/license-MIT-green)

</div>

---

## Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Screenshots](#screenshots)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Configuration](#configuration)
- [Routes](#routes)
- [Project Structure](#project-structure)
- [Architecture Notes](#architecture-notes)
- [Internationalization & RTL](#internationalization--rtl)
- [Theming](#theming)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## About

**Borcelle** is a single-page e-commerce marketplace application. The storefront lets customers browse products by category, search, save favorites, manage a cart, add delivery addresses, place orders and contact support. A separate, protected **admin dashboard** lets staff manage products, categories, brands, orders, cities and municipalities.

The app is fully **bilingual (English and Arabic)** with automatic **RTL/LTR switching**, supports **light and dark mode**, and is responsive across devices.

> This repository contains the **front-end only**. It consumes a REST API (see [Configuration](#configuration)).

---

## Features

### Storefront

- **Home page** with hero section, categories, recommended products, deals & offers (with countdown timers), suppliers by region, service highlights and an inquiry form
- **Product catalog** with pagination, category filtering and search (`/products/category/:CatID/search/:Search`)
- **Product details** page with image gallery (Fancybox lightbox), supplier card, ratings and loading skeletons
- **Shopping cart** with quantity counter, saved-for-later items, coupon input and bill summary
- **Favorites** list synced with the user account
- **Checkout / Payment** flow with payment method selection
- **Authentication**: registration, login and account verification (with resend)
- **User area**: profile, addresses, order history, my products, contact us, terms & conditions
- **Skeleton loaders** for products and details pages for smoother perceived performance
- Custom **404** page

### Admin Dashboard (`/admin`)

- Separate **admin authentication** with a route guard (token-based) and its own session storage
- **Dashboard** with stat cards (products, orders, categories, brands), charts (orders per week, monthly revenue, order status breakdown) and recent orders. Falls back to mock data if the API is unavailable
- Full **CRUD** for **Products, Categories, Brands, Cities and Municipals**
- **Orders** management
- Reusable admin building blocks: `ResourcePage`, `DataTable`, `FormModal`, `ViewModal`, `ConfirmDelete`, `AdminPagination`, `StatusBadge`, `StatCard`, `ChartCard`
- Client-side table search and server-side pagination

### General

- English / Arabic with automatic RTL layout
- Light / dark theme, remembered between visits
- Language auto-detection with English fallback
- Responsive, mobile-friendly UI with off-canvas navigation

---

## Tech Stack

| Area | Technology |
| --- | --- |
| Framework | [React 19](https://react.dev) |
| Build tool | [Vite 8](https://vite.dev) with `@vitejs/plugin-react` |
| Routing | [React Router 8](https://reactrouter.com) |
| Styling | [Tailwind CSS 4](https://tailwindcss.com) (`@tailwindcss/vite`), [Emotion](https://emotion.sh) |
| UI components | [MUI (Material UI) 9](https://mui.com) |
| Icons | [Lucide React](https://lucide.dev), [React Icons](https://react-icons.github.io/react-icons/) |
| Carousels | [Swiper 14](https://swiperjs.com) |
| Lightbox | [Fancyapps UI 6](https://fancyapps.com) |
| Charts | [ApexCharts](https://apexcharts.com) + `react-apexcharts` |
| i18n | [i18next](https://www.i18next.com), `react-i18next`, `i18next-browser-languagedetector` |
| Linting | ESLint 10 with React Hooks and React Refresh plugins |

---

## Screenshots

> Add your screenshots to a `docs/screenshots/` folder and update the paths below.

| Home | Product Details |
| --- | --- |
| ![Home](docs/screenshots/home.png) | ![Product](docs/screenshots/product.png) |

| Cart | Admin Dashboard |
| --- | --- |
| ![Cart](docs/screenshots/cart.png) | ![Admin](docs/screenshots/admin-dashboard.png) |

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) **v20.19+** (v22 LTS recommended)
- npm (comes with Node.js)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/borcelle.git
cd borcelle

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The app will be available at **http://localhost:5173**.

### Production build

```bash
npm run build     # outputs to /dist
npm run preview   # serves the production build locally
```

---

## Available Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server with hot module replacement |
| `npm run build` | Create an optimized production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |

---

## Configuration

The API base URLs are defined in two config files. To point the app at your own backend, change `BASE_URL` in both:

### `src/config/API-Config.js` (storefront)

```js
export const API_Config = {
  BASE_URL: "https://your-api-domain.com/api",
  ENDPOINTS: {
    LOGIN: "login",
    RESEND: "resend",
    REGISTER: "register",
    VERIFY: "verify",
    PRODUCTS: "product",
    CONTACT_US: "contact",
    SETTING: "setting",
    TERMS_AND_CONDITIONS: "terms_and_conditions",
    CATEGORY: "category",
    FAVORITE: "favorite",
    CART: "cart",
    ORDER: "order",
    ADDRESS: "address",
    CUSTOMER: "customer",
  },
};
```

### `src/config/Admin-API-Config.js` (admin dashboard)

```js
export const Admin_API_Config = {
  BASE_URL: "https://your-api-domain.com/api",
  STORAGE_KEY: "admin_info", // localStorage key for the admin session
  ENDPOINTS: {
    LOGIN: "admin/login",
    LOGOUT: "admin/logout",
    PRODUCT: "admin/product",
    CATEGORY: "admin/category",
    ORDER: "admin/order",
    BRAND: "admin/brand",
    CITY: "admin/city",
    MUNICIPAL: "admin/municipal",
  },
};
```

> **Tip:** For real deployments, consider moving `BASE_URL` into an environment variable (`VITE_API_URL`) and reading it with `import.meta.env.VITE_API_URL`, so you don't need to edit source files per environment.

### Browser storage keys

| Key | Purpose |
| --- | --- |
| `user_info` | Logged-in customer session |
| `admin_info` | Logged-in admin session |
| `theme-color` | Selected theme (`light` / `dark`) |

---

## Routes

### Public / customer

| Path | Page |
| --- | --- |
| `/` | Home |
| `/login` | Login |
| `/registration` | Registration |
| `/verification` | Account verification |
| `/products` | All products |
| `/products/category/:CatID` | Products by category |
| `/products/search/:Search` | Product search |
| `/products/category/:CatID/search/:Search` | Search within a category |
| `/product/:PID` | Product details |
| `/cart` | Shopping cart |
| `/favorite` | Favorites |
| `/payment` | Checkout / payment |
| `/profile` | User profile |
| `/address` | Saved addresses |
| `/orders` | Order history |
| `/my-products` | User's products |
| `/contact-us` | Contact form |
| `/terms-and-conditions` | Terms & conditions |
| `*` | 404 page |

### Admin (protected by `AdminGuard`)

| Path | Page |
| --- | --- |
| `/admin/login` | Admin login |
| `/admin/dashboard` | Dashboard (default) |
| `/admin/products` | Manage products |
| `/admin/categories` | Manage categories |
| `/admin/brands` | Manage brands |
| `/admin/orders` | Manage orders |
| `/admin/cities` | Manage cities |
| `/admin/municipals` | Manage municipals |

---

## Project Structure

```
borcelle/
├── public/                    # Static assets (logo.svg)
├── src/
│   ├── assets/                # Images used across pages
│   ├── components/            # Shared UI components
│   │   └── Admin/             # Reusable admin components (DataTable, FormModal, ...)
│   ├── config/                # API configuration (storefront + admin)
│   ├── context/               # React contexts & providers
│   │   ├── UserContext/
│   │   ├── CartContext/
│   │   ├── FavoriteContext/
│   │   ├── ThemeContext/
│   │   └── AdminAuthContext/
│   ├── hooks/                 # Custom hooks (useFancybox)
│   ├── i18n/                  # i18next setup + en.json / ar.json
│   ├── layout/                # Layouts & guards (Main, Admin, AdminGuard, ...)
│   ├── page/                  # Route-level pages
│   │   ├── Admin/
│   │   ├── Auth/
│   │   ├── Cart/
│   │   ├── Error/
│   │   ├── Favorite/
│   │   ├── Home/
│   │   ├── payment/
│   │   ├── product/
│   │   ├── products/
│   │   └── User/
│   ├── services/              # API service layer
│   │   └── Admin/             # Admin API services (generic CRUD factory)
│   ├── App.jsx                # Route definitions
│   ├── main.jsx               # App entry + providers
│   └── index.css              # Global styles / Tailwind entry
├── eslint.config.js
├── index.html
├── package.json
└── vite.config.js
```

---

## Architecture Notes

- **Context + Providers**: global state (user, cart, favorites, theme, admin auth) lives in React Context. Providers wrap `<App />` in `src/main.jsx`.
- **Service layer**: all HTTP calls live in `src/services/`, keeping components free from fetch logic.
- **Generic admin CRUD**: `AdminCrudService(endpoint)` returns `GetAll`, `GetById`, `Create`, `Update` and `Delete`. Combined with the reusable `ResourcePage` component, adding a new admin section takes only a few lines.
- **Route protection**: `AdminGuard` redirects to `/admin/login` when no admin token is present. Admin auth is kept separate from customer auth.
- **Resilient dashboard**: stats are fetched with `Promise.allSettled`, so one failing endpoint won't break the whole dashboard.
- **Layouts**: `MainLayout`, `AdminLayout`, `LogLayout`, `SectionLayout` and others keep page structure consistent.

### Adding a new admin resource

```js
// 1. src/config/Admin-API-Config.js  ->  add the endpoint
// 2. src/services/Admin/AdminXService.js
import { AdminCrudService } from "./AdminCrudService";
import { Admin_API_Config } from "../../config/Admin-API-Config";

export const AdminXService = AdminCrudService(Admin_API_Config.ENDPOINTS.X);

// 3. src/page/Admin/X.jsx  ->  render <ResourcePage service={AdminXService} ... />
// 4. src/page/Admin/AdminRoutes.jsx  ->  add <Route path="x" element={<X />} />
```

---

## Internationalization & RTL

- Translations live in `src/i18n/locales/en.json` and `src/i18n/locales/ar.json`.
- The user's language is auto-detected and falls back to **English**.
- On every language change, `<html dir>` and `<html lang>` are updated automatically, so Arabic renders **right-to-left**.
- Use the `LanguageSwitcher` component to let users change the language.

To add a new language:

1. Create `src/i18n/locales/<code>.json`
2. Register it in `src/i18n/i18n.js` under `resources`
3. Add it to the `LanguageSwitcher`

---

## Theming

Light and dark modes are handled by `ThemeProvider`, which toggles a `light` / `dark` class on `<body>` and stores the choice in `localStorage` (`theme-color`). Components use Tailwind's dark variants, and the admin charts adapt to the current mode.

---

## Deployment

Because this is a client-side routed SPA, your host must rewrite all routes to `index.html`.

**Netlify**: add `public/_redirects`:

```
/*    /index.html   200
```

**Vercel**: add `vercel.json`:

```json
{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }
```

**GitHub Pages**: set `base` in `vite.config.js` to your repository name and use a `404.html` fallback (or switch to `HashRouter`).

**Nginx**:

```nginx
location / {
  try_files $uri /index.html;
}
```

---

## Contributing

Contributions are welcome!

1. Fork the project
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m "Add amazing feature"`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

Please run `npm run lint` before submitting.

---

## License

Distributed under the **MIT License**. See `LICENSE` for more information.
*(Change this section if you choose a different license.)*

---

<div align="center">

Made with ❤️ using React & Vite

</div>