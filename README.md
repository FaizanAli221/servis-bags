# Bagline — Servis Bags Catalog

A full-stack e-commerce school bags catalog built with React + Vite + Tailwind CSS frontend, Express REST API backend, and an in-memory database.

## Structure
```
servis-bags/
├── api/            # Vercel Serverless Function entry
│   └── index.js
├── server/         # Express REST API
│   ├── index.js
│   ├── data.js
│   └── package.json
├── client/         # React + Vite + Tailwind frontend
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── api.js
│   ├── index.html
│   └── package.json
├── vercel.json     # Vercel deployment configuration
└── package.json    # Root workspace configuration
```

## Run Locally

**Option 1 — Single Command (Root):**
```bash
# Install dependencies
npm install

# Start both backend (port 4000) and frontend (port 5173) together
npm run dev
```

**Option 2 — Separate Terminals:**

**Terminal 1 — API (port 4000):**
```bash
npm run server
```

**Terminal 2 — Frontend (port 5173):**
```bash
npm run client
```

Open http://localhost:5173 — the Vite dev server proxies `/api/*` to the Express backend.

## Deploy on Vercel
1. Push this repository to GitHub.
2. Go to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Select your `servis-bags` repository.
4. Leave the Framework and Root settings as default (the preconfigured `vercel.json` will automatically build the client SPA and configure the `/api` serverless backend).
5. Click **Deploy**!

## API Endpoints
- `GET /api/products` — query params: `category`, `inStock` (true/false), `isNew` (true/false),
  `search`, `minPrice`, `maxPrice`, `sort` (`price_asc`, `price_desc`, `discount_desc`, `newest`)
- `GET /api/products/:id`
- `GET /api/categories`
- `POST /api/orders` — body: `{ items: [{ productId, quantity }], customer }`
- `GET /api/orders`
- `GET /api/health`

## Features
- Header with logo, live search, category nav, and dynamic cart counter
- Filter bar: stock status, "New" toggle, sort (price asc/desc, discount, newest)
- Product grid: discount badges, New/Sold-out tags, strike-through pricing, Add to Cart
- Slide-over cart drawer: quantity updates, remove item, subtotal/shipping/total, checkout confirmation
- Express REST API with filtering, sorting, order creation, and health check endpoints
- Full Vercel serverless deployment support
