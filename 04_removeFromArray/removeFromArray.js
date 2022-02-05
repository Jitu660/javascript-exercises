const removeFromArray = function (arr, ...elementsToDelete) {
  for (const element of elementsToDelete) {
    let found = arr.indexOf(element);
    if (found != -1) {
      arr.splice(found, 1);
    }
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
