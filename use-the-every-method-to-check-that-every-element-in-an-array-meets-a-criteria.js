/*Use the every method inside the checkPositive function to check if every element in arr is positive. The function should return a Boolean value.*/


function checkPositive(arr) {
  // Only change code below this line
 const isEveryPositive = arr.every(element => element > 0);
  return isEveryPositive;

  // Only change code above this line
}

checkPositive([1, 2, 3, -4, 5]);