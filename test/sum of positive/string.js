function repeatStr (n, s) {
  let result = '';
  for (let i = 1; i <= n; i ++) {
    result = `${result}${s}`;
  }
  return result;
}
module.exports={repeatStr};
