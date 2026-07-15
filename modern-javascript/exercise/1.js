//1. .map() method and Arrow Functions
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(number => number*number); 
console.log(squaredNumbers) //[1, 4, 9, 16, 25]

// //2..filter() method and Arrow Functions
const numbersGreaterThan2 = numbers.filter(num => num > 2) 
console.log(numbersGreaterThan2) //[3, 4, 5]

// //3. .forEach() method and Arrow Functions
numbers.forEach((number) => {
    console.log(number)
})

//4. .find() method and Arrow Functions
numbers.push(6)
const firstDivisibleByThree = numbers.find(num => num % 3 === 0);

console.log(firstDivisibleByThree); 

//5. Chaining Methods
numbers.pop()
const squaredGreaterThanTwo = numbers
  .filter(num => num > 2)
  .map(num => num **2);

console.log(squaredGreaterThanTwo); // Output: [9, 16, 25]