function findInArray(arr,findMe){
  var answer = [];
  for (var i = 0; i < arr.length; i++)
  if (arr[i] === findMe){
    return true;

  }
  return false;
}

findInArray([1,2,3],2);
