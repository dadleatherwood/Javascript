function removeVowels (str){
  arr = str.toLowerCase().split('');
  sentence = [];
  for ( var i = 0; i < arr.length; i++){
    if((arr[i] === 'a') || (arr[i] === 'e') || (arr[i] === 'i') || (arr[i] === 'o') || (arr[i] === 'u')) {
      arr.splice(i,1);
    }
  }
  return arr.join('')
}

removeVowels("This website is for losers LOL!");
