/*
let mid = (1 + 3.5) / 2.0;

console.log(mid);
console.log(Math.pow(mid, 2));

function nthRoot(n, x) {
  let low = 1;
  let high = x;
  let eps = 1e-6;
  //binary search
  while (high - low > eps) {
    console.log(`l:${low} , r:${high}`);
    let mid = (low + high) / 2.0;
    if (Math.pow(mid, n) < x) {
      low = mid;
    } else {
      high = mid;
    }
  }
  return Math.floor(high);
}

console.log(nthRoot(2, 11));

*/
/*
function singleElement(arr) {
  //   for (var i = 0; i < arr.length; i = i + 2) {
  //     if (arr[i] != arr[i + 1]) return arr[i];
  //   }
  let l = 0;
  let r = arr.length - 1;
  let k = -2;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    //even
    if (mid % 2 == 0) {
      if (arr[mid] == arr[mid - 1]) {
        r = mid - 1;
      } else if (arr[mid] == arr[mid + 1]) {
        l = mid + 1;
      } else return arr[mid];
    }
    //odd
    else if (mid % 2 == 1) {
      if (arr[mid] == arr[mid - 1]) {
        l = mid;
        if(k == l){ l = mid + 1 };
        k = l;
      } else if (arr[mid] == arr[mid + 1]) {
        r = mid;
      } else return arr[mid];
    }
  }
}
// let nums = [3, 3, 4, 7, 7, 10, 10, 12, 12];
// let nums = [3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8];
// let nums = [1, 1, 2];//w
let nums = [7, 7, 8];//nw
// let nums = [7, 8, 8];///working
// console.log((nums.length - 1) / 2);
// console.log(nums[Math.floor((nums.length - 1) / 2)]);
console.log(singleElement(nums));
*/
