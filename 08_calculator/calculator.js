const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
  return a - b;
};

const sum = function(array) {
  const sum = array.reduce((total,currentNumber) => {
      return total + currentNumber;
  },0);
  return sum;
};

const multiply = function(array) {
  const result = array.reduce((total,currentNumber) => {
      return total * currentNumber;
  }, 1);
  return result;
};

const power = function(number, power) {
    return number**power;
};

const factorial = function(number) {
    let fact = 1;
    while (number > 0) {
      fact = fact * number--;
    }
    return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
