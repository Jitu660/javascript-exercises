const add = function (n1, n2) {
  return n1 + n2;
};

const subtract = function (n1, n2) {
  return n1 - n2;
};

const sum = function (arr) {
  let sumValue = 0;
  for (const number of arr) {
    sumValue += number;
  }
  return sumValue;
};

const multiply = function (arr) {
  let product = 1;
  for (const number of arr) {
    product *= number;
  }
  return product;
};

const power = function (n1, n2) {
  return n1 ** n2;
};

const factorial = function (n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  let i = n - 1;
  while (i > 1) {
    n *= i;
    i--;
  }
  return n;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
