/*Use the some method inside the checkPositive function to check if any element in arr is positive. The function should return a Boolean value.*/



function checkPositive(arr) {
  // Only change code below this line
const hasPositive = arr.some(element => element > 0);
  return hasPositive;

  // Only change code above this line
}

checkPositive([1, 2, 3, -4, 5]);