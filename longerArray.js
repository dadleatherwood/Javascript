var arr1 = [1,2];
var arr2 = [1,2,3];
function longer (arr1,arr2) {
  if(arr1.length > arr2.length){
    return "arr1";
  }
  return "arr2";
}

longer(arr1,arr2);
