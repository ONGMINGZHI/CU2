//You learned how to declare a normal function

function sayHello(){
    console.log('Hello')
}

//You can also do something similar, with arrow functions

//Syntax
//const functionName = (arguments) => doSomething

const sayAnotherHello = () => console.log("Another hello!")

//With another above example, can you write an arrow function for multiplication?
//Hint: There's answer in your portal lol.

const multiply = (a, b) => a * b;

console.log(multiply(5,4)) //20

//Arrow functions in Callbacks

//Don't be alarmed by the word 'Callbacks'
//Just think of it as special function for special precedure
//Example is like your filter array function

const list = [2,4,6,8]
//The filter function serves as a callback
const list2 = list.filter(num => num > 5) //This ia a callback
console.log(list2) //[6,8]

//Just to show you, normally you have to write function like this

const list3 = list.filter(function(num){ return num < 5})
console.log(list3) // [2,4]

//Above example is the counterpart to using arrow function.