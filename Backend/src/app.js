const express = require("express");
const postRoutes = require("./routes/posts.routes");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/posts", postRoutes);

module.exports = app;