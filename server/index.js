import express from "express";
import cors from "cors";
import morgan from "morgan";
import { products, orders, nextOrderId, pushOrder } from "./data.js";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// ---------- Helpers ----------
function applyFilters(list, query) {
  let result = [...list];
  const { category, inStock, isNew, search, minPrice, maxPrice } = query;

  if (category && category !== "all") {
    result = result.filter(
      (p) => p.category.toLowerCase() === category.toLowerCase()
    );
  }
  if (inStock === "true") {
    result = result.filter((p) => p.inStock === true);
  } else if (inStock === "false") {
    result = result.filter((p) => p.inStock === false);
  }
  if (isNew === "true") {
    result = result.filter((p) => p.isNew === true);
  }
  if (search) {
    const q = String(search).toLowerCase();
    result = result.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.color.toLowerCase().includes(q)
    );
  }
  if (minPrice) {
    result = result.filter((p) => p.discountedPrice >= Number(minPrice));
  }
  if (maxPrice) {
    result = result.filter((p) => p.discountedPrice <= Number(maxPrice));
  }
  return result;
}

function applySort(list, sort) {
  const result = [...list];
  switch (sort) {
    case "price_asc":
      return result.sort((a, b) => a.discountedPrice - b.discountedPrice);
    case "price_desc":
      return result.sort((a, b) => b.discountedPrice - a.discountedPrice);
    case "discount_desc":
      return result.sort((a, b) => b.discountPercent - a.discountPercent);
    case "newest":
      return result.sort((a, b) => (b.isNew === true) - (a.isNew === true));
    default:
      return result;
  }
}

// ---------- Routes ----------
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// GET /api/products?category=kids&inStock=true&isNew=true&search=ace&sort=price_asc
app.get("/api/products", (req, res) => {
  const filtered = applyFilters(products, req.query);
  const sorted = applySort(filtered, req.query.sort);
  res.json({
    count: sorted.length,
    products: sorted
  });
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p.id === req.params.id);
  if (!product) return res.status(404).json({ error: "Product not found" });
  res.json(product);
});

app.get("/api/categories", (req, res) => {
  const categories = [...new Set(products.map((p) => p.category))];
  res.json({ categories });
});

// POST /api/orders  { items: [{ productId, quantity }], customer: {...} }
app.post("/api/orders", (req, res) => {
  const { items, customer } = req.body;

  if (!Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ error: "Order must include at least one item" });
  }

  let subtotal = 0;
  const lineItems = [];

  for (const item of items) {
    const product = products.find((p) => p.id === item.productId);
    if (!product) {
      return res.status(400).json({ error: `Product ${item.productId} not found` });
    }
    if (!product.inStock) {
      return res.status(400).json({ error: `Product ${product.title} is sold out` });
    }
    const qty = Math.max(1, Number(item.quantity) || 1);
    const lineTotal = product.discountedPrice * qty;
    subtotal += lineTotal;
    lineItems.push({
      productId: product.id,
      title: product.title,
      unitPrice: product.discountedPrice,
      quantity: qty,
      lineTotal
    });
  }

  const shipping = subtotal > 0 ? 189 : 0;
  const total = subtotal + shipping;

  const order = {
    id: `ORD-${nextOrderId}`,
    items: lineItems,
    customer: customer || null,
    subtotal,
    shipping,
    total,
    status: "confirmed",
    createdAt: new Date().toISOString()
  };

  pushOrder(order);
  res.status(201).json(order);
});

app.get("/api/orders", (req, res) => {
  res.json({ count: orders.length, orders });
});

if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`Servis Bags API running at http://localhost:${PORT}`);
  });
}

export default app;
