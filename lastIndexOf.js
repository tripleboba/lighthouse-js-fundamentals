/*
build a function that return the last index of the occured value 
*/

const lastIndexOf = (array, value) => {
  let lastPosition = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) lastPosition = i;
  }
  return lastPosition;
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);