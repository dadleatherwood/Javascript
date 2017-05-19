function oddsAndEvens (nums) {
  var evens = [];
  var odds = [];
  for(var i = 0;i < nums.length; i++){
    if(nums[i] % 2 === 0){
      evens.push(nums[i]);
    } else if (nums[i] % 2 !== 0){
      odds.push(nums[i]);
    }
  }
  return evens;
}

oddsAndEvens([1,2,3,4,5,6,7,8,9,10]);
