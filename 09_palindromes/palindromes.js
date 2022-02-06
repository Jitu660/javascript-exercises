const palindromes = function (str) {
  str = str.toLowerCase().replace(/[^a-z]/g, "");
  let i = 0,
    j = str.length - 1;
  while (i < j) {
    if (str[i++] !== str[j--]) {
      return false;
    }
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
