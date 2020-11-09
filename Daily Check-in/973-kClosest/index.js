/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {
  var closest = points.sort(function(prev,next){
      let prevSqrt = prev[0]**2 + prev[1]**2;
      let nextSqrt = next[0]**2+next[1]**2;
      return prevSqrt - nextSqrt;
  });
  return closest.slice(0,K)
};