// The Spread Operator
// When it comes to arrays, you can add them together:

// const groceryList = ["apples", "bananas", "milk", "eggs"];
// const householdItems = ["paper towels", "dish soap", "toothpaste"];

// const combinedList = [groceryList, householdItems];

// console.log(combinedList);

// /* Output:
// [
//   [ 'apples', 'bananas', 'milk', 'eggs' ],
//   [ 'paper towels', 'dish soap', 'toothpaste' ]
// ]
// */

// Oh wait... the output is an array of two arrays. How can we combine them into a single array? We can use a handy tool called a spread operator!

// The spread operator lets you "unpack" items out of collections, like array elements or object properties, for use in other places. This allows us to do cool things, such as:

// Apply zero or more arguments to a function.
// Unpack items and add them to another array or object.
// To use the spread operator, we use three ... periods on the left side of the array name.

const planvac = (...all) => console.log(all);

const groceryList = ["apples", "bananas", "milk", "eggs"];
const householdItems = ["paper towels", "dish soap", "toothpaste"];
planvac(groceryList);
planvac(householdItems);

const combine = [...groceryList,...householdItems];
console.log(combine);

const packGroceries = (...items) => {
    return items;
  }
  
  const packedGroceries = packGroceries("apples", "bananas", "milk");
  const morePackedGroceries = packGroceries("eggs", "bread");
  
  console.log(packedGroceries);
  console.log(morePackedGroceries);
  /*
  Output:
  [ 'apples', 'bananas', 'milk' ]
  [ 'eggs', 'bread' ]
  */