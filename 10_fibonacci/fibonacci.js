const fibonacci = function (n) {
  if (n < 0) {
    return "OOPS";
  }
  n = parseInt(n);
  let a = 1,
    b = 1;
  if ((n === 1, n === 2)) {
    return 1;
  }
  let i = 2;
  while (i++ < n) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
};
console.log(fibonacci(6));
// Do not edit below this line
module.exports = fibonacci;
