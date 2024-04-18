//Fill in the body of the add function so it uses currying to add parameters x, y, and z.



function add(x) {
  // Only change code below this line
return function(y) {
    // Return a function that takes the final parameter z
    return function(z) {
      // Return the sum of x, y, and z
      return x + y + z;
    };
  };


  // Only change code above this line
}

add(10)(20)(30);