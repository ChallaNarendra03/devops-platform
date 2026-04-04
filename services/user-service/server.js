const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("User Service Running 🚀");
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "UP" });
});

app.get("/users", (req, res) => {
  res.json([
    { id: 1, name: "Narendra" },
    { id: 2, name: "DevOps Engineer" }
  ]);
});

app.listen(3000, () => {
  console.log("User service running on port 3000");
});
