var insert = function (intervals, newInterval) {
  let i = 0,
    result = [],
    len = intervals.length;
  if (intervals.length === 0) {
    intervals.push(newInterval);
    return intervals;
  }
  intervals.push(newInterval);
  intervals.sort((prev, next) => prev[0] - next[0]);
  len += 1;
  while (i < len) {
    let currentLeft = intervals[i][0];
    let currentRight = intervals[i][1];
    // 如果下一项的左小于等于当前项的右 合并区间
    while (i < len - 1 && intervals[i + 1][0] <= currentRight) {
      i++;
      currentRight = Math.max(intervals[i][1], currentRight);
    }
    result.push([currentLeft, currentRight]);
    i++;
  }
  return result;
};
//直接插入
var insert = function (intervals, newInterval) {
  let i = 0,
    result = [],
    len = intervals.length
    newStart = newInter[0],
    newEnd = newInter[1];
  if (intervals.length === 0) {
    intervals.push(newInterval);
    return intervals;
  }
  intervals.push(newInterval);
  // len += 1;
  while (i < len) {
    while (i < len&&newStart>intervals[i][1]) {
      result.push(newInterval);
      i++
    }
    //合并区间 新项左大于当前项右
    while (i < len&&newStart<=intervals[i][1]){
      newStart = Math.min(intervals[i][0],newStart);
      newEnd = Math.max(intervals[i][1],newEnd);
      result.push([newStart,newEnd]);
      i++
    }
  }
  return result;
};

var insert = function(intervals, newInterval) {
  intervals.push(newInterval);
  const _intervals = intervals.sort((a, b) => { return a[0] - b[0] });
  const res = [_intervals[0]];
  for (var i = 1; i < _intervals.length; i++) {
      const lastRes = res[res.length - 1];
      if (_intervals[i][0] > lastRes[1]) {
          res.push(_intervals[i])
      } else if (_intervals[i][1] > lastRes[1]) {
          lastRes[1] = _intervals[i][1]
      }
  }
  return res;
};