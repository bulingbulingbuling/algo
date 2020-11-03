//66 自己的
var plusOne = function (digits, index = 1) {
  let t = digits[digits.length - index];
  if (t < 9) {
    digits[digits.length - index] += 1;
    return digits;
  } else {
    digits[digits.length - index] = 0;
    if (digits.length === index) {
      digits.unshift(1);
      return digits;
    } else if (digits[digits.length - index - 1] === 9) {
      plusOne(digits, index + 1);
    } else {
      digits[digits.length - index - 1] += 1;
    }
    return digits;
  }
};

var plusOne = function (digits) {
  for (var i = digits.length - 1; i >= 0; i--) {
    //最后一位加一
    if (i === digits.length - 1) {
      digits[i] += 1;
    }
    if (i !== 0 && digits[i] === 10) {
      digits[i] = 0;
      digits[i-1] += 1;
    }else if (i === 0 && digits[i] === 10) {
      digits[i] = 0;
      digits.unshift(1);
    }else{
      break;
    }
  }
  return digits;
};


plusOne([9,9]);
