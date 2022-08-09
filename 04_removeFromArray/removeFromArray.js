const removeFromArray = function(array,...values) {

  return array.filter(function(item){
    for(let val of values){
      if (item === val) {
        return false;
      }
    }
    return true;
  });

};

// Do not edit below this line
module.exports = removeFromArray;
