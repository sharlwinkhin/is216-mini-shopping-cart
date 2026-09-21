const express = require("express");
const cors = require("cors");
const Mart = require("./model/Mart");

const app = express();
const mgr = new Mart();

// Allow requests from any website
app.use(cors());

// Allow JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Return all categories
app.get("/categories", (req, res) => {
  res.json(mgr.getCategories());
});

// Return items by categories
app.get("/items", (req, res) => {
  // Default response
  let results = {
    status: false,
  };

  if (req.query.category) {
    const category = req.query.category;
    results = mgr.getItems(category);
  }

  res.json(results);
});

// Issue a receipt
function doProcess(cart) {
  let receiptID = Math.floor(Math.random() * 1000000).toString().padStart(6, "0");

  let total = 0;

  for (const item of cart) {
    total += item.price * item.quantity;
  }

  return {
    receiptID,
    cart,
    total,
  };
}

// Handle checkout requests
app.post("/checkout", (req, res) => {
  // Default response
  let results = {
    status: false,
  };

  const { cart } = req.body;

  if (cart) {
    results = doProcess(cart);
  }

  res.json(results);
});

// Start the server
app.listen(3000, () => {
  console.log("Server running on http://127.0.0.1:3000");
});