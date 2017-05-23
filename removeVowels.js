function removeVowels (str){
  var arr = str.toLowerCase().split('');
  for ( var i = 0; i < arr.length; i++){
    if((arr[i] === 'a') || (arr[i] === 'e') || (arr[i] === 'i') || (arr[i] === 'o') || (arr[i] === 'u')) {
      arr.splice(i,1);
    }
  }
  return arr.join('')
}

function removeVowels(str) {
  return str.replace(/[aeiou]/gi, '') //quicker way
}

removeVowels("This website is for losers LOL!");
