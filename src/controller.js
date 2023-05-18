// This component makes a bridge between Model and View component.

const randomNumberModel = require("./model");
//imports the random number
const calculateView = require("./view");
// imports the calculateVIew function
const calculatePresenter = (req, res) => {
  calculateView(req, res, randomNumberModel);
  // calls the calculated function and provides necessary arguments
};

module.exports = calculatePresenter;
// exports the calculatePresenter to index.js
