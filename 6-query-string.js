const express = require("express");
const { products } = require("./data");
const app = express();

app.get("/api/v1/query", (req, res) => {
  let sortedProducts = [...products];
  const { search, limit } = req.query;

  if (search) {
    sortedProducts = products.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    sortedProducts = products.splice(0, Number(limit));
  }
  if (sortedProducts.length < 1) {
    return res.status(200).json({ success: true, data: [] });
  }
  res.status(200).json(sortedProducts);
});
app.listen("5000", () => {
  console.log("server started at port 5000");
});
