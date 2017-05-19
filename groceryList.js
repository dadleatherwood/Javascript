function removeItem (myGroceryList,item) {
  for(var i = 0;i < myGroceryList.length; i++) {
    if (myGroceryList[i] === item) {
      myGroceryList.splice(i, 1);
      return myGroceryList
    }
  }
}

removeItem(["apple","tuna","salad"],"tuna");
