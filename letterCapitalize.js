function letterCapitalize(str) {
  var arr = str.toLowerCase().split(' ')
  var newArr = [];
  var sentence = [];
  for (var i = 0; i < arr.length; i++) {
    newArr = arr[i].split('');
    newArr[0] = newArr[0].toUpperCase();
    sentence.push(newArr.join(''));
  }
  return sentence.join(' ');
}

letterCapitalize("Hello I am Batman!");
