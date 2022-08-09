const sumAll = function(number1, number2) {

  if (typeof number1 !== "number" || typeof number2 !== "number" || number1 < 0 || number2 < 0) {
    return 'ERROR';
  }
  if (number1 > number2) {
    [number1, number2] = [number2, number1];
  }
  let sum = 0;
  while (number1 <= number2) {
    sum += number1++;
  }
  return sum;

};

// Do not edit below this line
module.exports = sumAll;
