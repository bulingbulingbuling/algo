var shortestToChar = function (S, C) {
  let arr = [-Infinity],
    result = [];
  for (var i = 0; i < S.length; i++) {
    if (S[i] === C) {
      arr.push(i);
    }
  }
  arr.push(Infinity);

  for (let j = 0; j < S.length; j++) {
    if (S[j] === C) {
      arr.shift();
      result.push(0);
    } else {
      result.push(Math.min(j - arr[0], arr[1] - j));
    }
  }
  return result;
};
console.log(shortestToChar("loveleetcode","e"))
