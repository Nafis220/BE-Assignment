//This file handles the calculation random number generator application

const randomNumber = (start, end) => {
  //User may send wrong Data type. To run the function with two integers both the arguments are converted to integer

  const startInt = parseInt(start);
  const endInt = parseInt(end);
  //To ensure that the second number is bigger than the first number the following if block is included
  if (startInt > endInt) {
    return "Please put two integer numbers where the first one is lesser than the second one.";
  }

  //determining the difference
  const range = endInt - startInt + 1;
  // Generating random number
  const random = Math.random();
  // Ensuring the random number must be integer data type
  const scaled = Math.floor(random * range);
  //Final result
  const result = scaled + startInt;

  return result;
};
//Exporting the random number to send it to the controller component that makes a bridge between Model and View
module.exports = randomNumber;
