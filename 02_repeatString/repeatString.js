const repeatString = function(string, number) {
    if (number < 0) {
      return "ERROR";
    }
    let text = "";
    for (var i = 0; i < number; i++) {
      text += string;
    }
    return text;
};

// Do not edit below this line
module.exports = repeatString;
