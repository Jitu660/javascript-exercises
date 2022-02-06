const findTheOldest = function (arr) {
  let oldest = arr[0];
  for (person of arr) {
    oldest = getAge(oldest) > getAge(person) ? oldest : person;
  }
  return oldest;
};

function getAge(person) {
  let birthYear = person.yearOfBirth;
  let deathYear = person.yearOfDeath ?? new Date().getFullYear();
  return deathYear - birthYear;
}
console.log(getAge(2001));
// Do not edit below this line
module.exports = findTheOldest;
