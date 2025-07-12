function greet(name) {
  console.log(`Hello ${name}`);
}

function higherOrderFunction(callback) {
  const name = "Vishwas";
  callback(name);
}

higherOrderFunction(greet);


/*Synchronus callbacks*/
let numbers = [1, 2, 4, 7, 3, 5, 6];

// Step 1: Sort the array in ascending order
let sorted = numbers.sort((a, b) => a - b);
console.log("Sorted:", sorted); // [1, 2, 3, 4, 5, 6, 7]

// Step 2: Filter even numbers
let evens = sorted.filter(n => n % 2 === 0);
console.log("Even Numbers:", evens); // [2, 4, 6]

// Step 3: Divide each number by 2
let halved = evens.map(n => n / 2);
console.log("Halved:", halved); // [1, 2, 3]

