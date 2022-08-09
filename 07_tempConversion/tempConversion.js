const ftoc = function(fahrenheit) {
   let result = (fahrenheit - 32) * (5/9);
   result = Math.round(result * 10) / 10;
   return result;

};

const ctof = function(celsuis) {
   let result = celsuis * (9/5) + 32;
   result = Math.round(result * 10) / 10;
   return result;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
