const palindromes = function (string) {
  const stringChars = string.split("");
  const stringLetters = stringChars.filter(char => char.toLowerCase() !== char.toUpperCase()
  );
  // console.log(stringLetters);
  const cleanString = stringLetters.join("");
  // console.log(cleanString);

  for (var i = 0; i < Math.floor(cleanString.length / 2); i++) {
    if (cleanString[i].toLowerCase() !== cleanString[cleanString.length - 1 - i].toLowerCase()){
        return false;
    }
  }
  return true;
};


// Do not edit below this line
module.exports = palindromes;
