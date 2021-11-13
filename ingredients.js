const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let i = 0;
console.log("--- while loop ---");
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}

// Write a for loop that prints out the contents of ingredients:
console.log("--- for loop ---");
for (i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
console.log("--- backward for loop ---");
for (i = ingredients.length - 1; i >= 0 ; i--) {
  console.log(ingredients[i]);
}

console.log("--- backward while loop ---");
let j = ingredients.length - 1;
while (j >= 0) {
  console.log(ingredients[j]);
  j--;
}