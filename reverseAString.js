function reverseAString (str) {
  newStr = "";
  newStr = str.split("").reverse().join("");
  return newStr;
}

reverseAString("I am Groot")
