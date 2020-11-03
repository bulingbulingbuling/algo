// 伪代码示例
// SimpleStockSpan(quotes)->spans
// 输入：quotes,保存N个股票报价的数组
// 输出：spans,保存N个股票跨度的数组
// spans <- CreeateArray(n)
// for i <- 0 to n do
//   k <- 1
//   span_end <- false
//   while i-k >= 0 and not span_end do
//     if quotes[i-k] <= quotes[i] then
//       k <- k+1
//     else
//       span_end <- true
//   spans[i] <- k
//   return spans
/**
 * 股票跨度
 * @param {Array} quotes
 */
// function simpleStockSpan(quotes) {
//   let spans = [];
//   for (let i = 0; i < quotes.length; i++) {
//     let k = 1,
//       span_end = false;
//     while (i - k >= 0 && !span_end) {
//       if (quotes[i - k] <= quotes[i]) {
//         k++;
//       } else {
//         span_end = true;
//       }
//     }
//     spans[i] = k;
//   }
//   return spans;
// }
// simpleStockSpan([3,7,4,2,1,5,6])

//75
var sortColors = function (nums) {
  let left = 0,
    right = nums.length - 1;
  for (var i = 0; i < nums.length; i++) {
    let staging_area = nums[i];
    if (i > right) break;
    if (staging_area === 2) {
      nums[i] = nums[right];
      nums[right] = staging_area;
      i--;
      right--;
    } else if (staging_area === 0) {
      nums[i] = nums[left];
      nums[left] = staging_area;
      left++;
    } else {
      continue;
    }
  }
  return nums;
};
//821
// console.log(sortColors([2, 0, 1]));
var shortestToChar = function (S, C) {
  let arr = [-Infinity],
    result = [];
  for (let i = 0; i < S.length; i++) {
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

// shortestToChar("loveleetcode", "e");

//941
var validMountainArray = function (A) {
  let tops = [];
  if (A.length < 3) {
    return false;
  }
  for (var i = 1; i < A.length; i++) {
    if (A[i - 1] < A[i] && A[i] > A[i + 1]) {
      tops.push(A[i]);
    }
  }
  if (tops.length > 1 || tops.length === 0) {
    return false;
  }
  let left = true;
  for (var j = 0; j < A.length; j++) {
    if (A[j] === tops[0]) {
      left = false;
    } else if (A[j] >= A[j + 1] && left) {
      return false;
    } else if (A[j] <= A[j + 1] && !left) {
      return false;
    }
  }
  return true;
};

var validMountainArray = function (A) {
  let i = 0;
  let j = A.length - 1;
  while (i < j) {
    if (A[i] < A[i + 1]) {
      i++;
    } else {
      break;
    }
  }

  while (i < j) {
    if (A[j] < A[j - 1]) {
      j--;
    } else {
      break;
    }
  }

  return i == j && i != 0 && j != A.length - 1;
};

/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function (A) {
  let s1 = 0,
    s2 = 0;

  for (let i = 0; i < A.length - 1; i++) {
    if (A[i] < A[i + 1]) {
      s2 = 1;
      if (s1 == 1) return false;
    } else if (A[i] > A[i + 1]) {
      s1 = 1;
    } else return false;
  }
  return s1 == 1 && s2 == 1 && A.length > 2 ? true : false;
};

// console.log(validMountainArray([0,3,2,1]));
// console.log(validMountainArray([2,1]));
// console.log(validMountainArray([3,5,5]));
// console.log(validMountainArray([0,2,3,4,5,2,1,0]));
// console.log(validMountainArray([0,2,3,3,5,2,1,0]));
// console.log(validMountainArray([0,2,3,5,5,2,1,0]));

/**
 * @param {number} maxSize
 */
var CustomStack = function (maxSize) {
  this.stack = [];
  this.length = maxSize;
};

/**
 * @param {number} x
 */
CustomStack.prototype.push = function (item) {
  if (this.stack.length < this.length) {
    this.stack.push(item);
  }
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function () {
  return this.stack.length ? this.stack.pop() : -1;
};

/**
 * @param {number} k
 * @param {number} val
 */
CustomStack.prototype.increment = function (k, val) {
  for (let i = 0; i < k && i < this.stack.length; i++) {
    this.stack[i] += val;
  }
};
