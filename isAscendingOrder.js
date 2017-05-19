function inAscOrder (array){
  for(var i = 0; i < array.length; i++) {
    if(array[i] > array[i + 1]){
      return false;
    }
  }
  return true;
}

inAscOrder([1,2,4,7,19]);
inAscOrder([1,2,3,4,5]);
inAscOrder([1,6,10,18,2,4,20])
inAscOrder([9,8,7,6,5,4,3,2,1])
