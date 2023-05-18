//Before destructuring I wrote all those codes here together to test my logics.

const express = require("express");
const app = express();

app.get("/api/calculate", (req, res) => {
  const { start, end } = req.query;
  console.log("start", start);
  const randomValue = randomNumber(start, end);
  res.json({ RandomNumber: randomValue, start: start, end: end });
});
app.listen(6000, () => {
  console.log("Listening on port 6000");
});

const randomNumber = (start, end) => {
  const startInt = parseInt(start);
  const endInt = parseInt(end);

  if (startInt > endInt) {
    return "Please put two integer numbers where the first one is lesser than the second one.";
  }

  const range = endInt - startInt + 1;

  const random = Math.random();

  const scaled = Math.floor(random * range);

  const result = scaled + startInt;

  return result;
};
