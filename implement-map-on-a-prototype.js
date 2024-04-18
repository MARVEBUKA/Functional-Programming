/*Write your own Array.prototype.myMap(), which should behave exactly like Array.prototype.map(). You should not use the built-in map method. The Array instance can be accessed in the myMap method using this.*/




Array.prototype.myMap = function(callback) {
  const newArray = [];
  // Only change code below this line
  for (let i = 0; i < this.length; i++) {
    // Apply the callback function to the current element and store the result in the new array
    newArray.push(callback(this[i], i, this));
  }
  // Only change code above this line
  return newArray;
};