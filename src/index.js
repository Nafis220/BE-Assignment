const express = require("express");
const app = express();
const calculatePresenter = require("./controller");

app.get("/api/calculate", (req, res) => {
  calculatePresenter(req, res);
});

app.listen(4000, () => {
  console.log("Listening on port 4000");
});
