function addItem (myGroceryList, item){
  for(var i = 0;i < myGroceryList.length; i++) {
    if (myGroceryList[i] === item) {
      return myGroceryList;
    }
  }
  myGroceryList.push(item);
  return myGroceryList;
}
addItem(["apple","tuna","salad"],"pears");
