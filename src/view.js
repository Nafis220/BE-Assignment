// this function deals with generating response to the user.

const calculateView = (req, res, randomNumber) => {
  const { start, end } = req.query;

  const randomValue = randomNumber(start, end);
  if (typeof randomValue != "number") {
    res.status(422).json({ message: randomValue });
  } else {
    res.json({ RandomNumber: randomValue, start: start, end: end });
  }
};

module.exports = calculateView;
