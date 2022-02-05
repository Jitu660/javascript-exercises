const sumAll = function (n1, n2) {
  if (n1 < 0 || n2 < 0 || !Number.isInteger(n1) || !Number.isInteger(n2)) {
    return "ERROR";
  }
  let sum = 0;
  if (n1 > n2) {
    let n3 = n1;
    n1 = n2;
    n2 = n3;
  }
  for (let i = n1; i <= n2; i++) {
    sum += i;
  }
  return sum;
};
// Do not edit below this line
module.exports = sumAll;
