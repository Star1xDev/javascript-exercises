const findTheOldest = function(array) {
  let oldestPerson = array.reduce((oldest,currentPerson) => {
      let oldestPersonAge;
      let currentPersonAge;
      if (!oldest.yearOfDeath) {
        oldestPersonAge = new Date().getFullYear() - oldest.yearOfBirth;
      } else{
         oldestPersonAge = oldest.yearOfDeath - oldest.yearOfBirth;
      }

      if (!currentPerson.yearOfDeath) {
        oldestPersonAge = new Date().getFullYear() - oldest.yearOfBirth;
      } else{
         currentPersonAge = currentPerson.yearOfDeath - currentPerson.yearOfBirth;
      }

      if (currentPersonAge > oldestPersonAge) {
        oldest = currentPerson;
      }
      return oldest;

  }, array[0])
  return oldestPerson;
};


// Do not edit below this line
module.exports = findTheOldest;
