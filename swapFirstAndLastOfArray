function swapFirstAndLast (arr) {
  var firstNum = [];
  var lastNum = [];
  if (arr.length <= 1) {
    return arr
  } else {
  firstNum = arr.splice(0,arr[0]);
  lastNum = arr.splice(arr.length-1,arr[arr.length-1]);
  arr.unshift(parseInt(lastNum));
  arr.push(parseInt(firstNum));
  return arr;
  }
}

swapFirstAndLastAlso([1,2,3,4,5]);

function swapFirstAndLast (arr) {
if (arr.length <= 1) {
return arr;
}
var firstElement = arr[0];
arr[0] = arr[arr.length - 1];
arr[arr.length - 1] = firstElement;
return arr;
}

swapFirstAndLastAlso([5,4,3,2,1]);
