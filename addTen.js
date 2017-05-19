var numbers = [5, '9', 16, 19, '25', '34', 48];
function addTen (numbers) {
  var newArray  = [];
  for (var i = 0; i < numbers.length; i++) {
   newArray[i] = parseInt(numbers[i]) + 10;
  }
  return newArray;
}

addTen (numbers);
