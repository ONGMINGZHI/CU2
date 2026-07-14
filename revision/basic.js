// Variables
/*
// Variables are basically values that ar estored to a named

// example 

// cat = 5
// So you know cat is 5.

// Let's say cat's age is 7, you should declare that as
// catAge = 7

// Declare 5 variables, and console log them all.
var teamA ="Chicago Bulls"
var teamB ="Golden State Warriors"
var teamAPoints =123
var teamBPoints =141
var teamBWin =true

console.log("Team A: " + teamA)
console.log(`Team B: ${teamB}`)
console.log("Team A Points: " +teamAPoints)
console.log(`Team B Points: ${teamBPoints}`)
console.log(teamBWin)

// Can you change the above console logs to include proper statements?
// Example:
// Team A: Chicago Bulls
// Team A Points: 123
*/

// Conditionals
/*
// If and else statements.

// If statement
var age = 25
if(age >=21){
    console.log("You are allowed to enter")
}else{
    console.log("You are NOT allowed to enter")
}

// Write me a if,else if and else statement
// For a traffic light system
// If green, output "You may go"
// If yellow,output "You may go if you've crossed the line"
// If red, output "Stop!"

var trafficLight ="red"
if (trafficLight == "green"){
    console.log("You may go")
}else if(trafficLight == "yellow") {
    console.log("You may go if you've crossed the line")
} else {
    console.log("Stop!")
}
    */

// Conditionals----Ternary Operator
/*
var points = 18
var message = points >= 21 ? "The game has ended" : "The game shall continue"
console.log(message)
*/

//Loops
/*
let lapsNeeded = 10
let ian = 0
for (let shakthy = 1; shakthy <=lapsNeeded; shakthy++){
    console.log(`Shakthy has run ${shakthy} laps.`)
    ian++
    console.log(`Ian has run ${ian} laps.`)
    ian++
    console.log(`Ian has run ${ian} laps.`)
}
    */

//Rewrite the above logic in 'while' loop.
/*
let shakthy = 0
let lapsNeeded = 10
let ian = 0
while (shakthy < lapsNeeded){
    console.log(`Shakthy has run ${shakthy + 1} laps.`)
    shakthy++
    ian++
    console.log(`Ian has run ${ian} laps.`)
    ian++
    console.log(`Ian has run ${ian} laps.`)
}
    */

//Functions
/*
function addTwoNumbers(num1,num2){
    console.log(`Total: ${num1 + num2}`)
}
addTwoNumbers(5,6)

//Rewrite the above function, but change it to use a 'return' statement
function addTwoNumbersNew(num1,num2){
    return num1 + num2
}
console.log("Total : "+ addTwoNumbersNew(6,7)); 

//The purpose of the return statement is to assign the value back to the function call.
//Function call is whenever you call the function.
//Returns undefined by Default: If you do not include a return statement, or if you use return without a value, the function automatically outputs undefined.

//Write a function that calculates the area of a rectangle
//Use a return statement to return the result, output with a console log

function rectangleArea(length,width){
    return length*width
}
let result = rectangleArea
console.log(`Rectangle Area: ${result(5,6)}`)

//Write a function for me that calculates the perimeter of a rectangle 
//Use a return statement to return the result, output with a console log
function rectanglePerimeter(length,width){
    return ((length+width)*2)
}
let answer = rectanglePerimeter
console.log(`Rectangle Perimeter: ${answer(5,6)}`)
*/

//Arrow function
/*
const rectangleArea = (length,width) => length*width
console.log(rectangleArea(5,6))

//Given the example above,convert the rectanglePerimeter function to an arrow function
const rectanglePerimeter = (length,width) => {
    return ((length+width)*2)
}
console.log(rectanglePerimeter(5,6))
*/

//Arrays & Objects
/*
//This is an array
//Using square brackets []
let phones = ['iPhone','Nokia','Samsung','Vivo','Oppo','Pineapple 13 Pro Max by Nicholas','XiaoMi']
console.log(phones)

//use a foreach loop for the above array
phones.forEach((phone) => {
    console.log(phone)
})

//This is an object
//Using curly brackets {}
let myProfile ={
    name:"Ming Zhi",
    age: 18,
    occupation:"Full-Stack Web Developer",
    hobbies:["Reading","Listening to Music","Watching Movies"]
}
console.log(myProfile)

for (let key in myProfile){
    console.log(`${key}: ${myProfile[key]}`)
    console.log(key)
    console.log(myProfile[key])
}

//Modify the above, just show the 2nd item when it comes to hobbies.
//HINT: You need an if statement for this.
let myProfile ={
    name:"Ming Zhi",
    age: 18,
    occupation:"Full-Stack Web Developer",
    hobbies:["Reading","Listening to Music","Watching Movies"]
}
console.log(myProfile)
for (let key in myProfile){
    if (key =="hobbies"){
        console.log(`${key}: ${myProfile[key][1]}`)
    }else{
    console.log(`${key}: ${myProfile[key]}`)
    }
}
    */

//Array of Objects

//1st way to make array of objects
myProfile ={
    name:"Ming Zhi",
    age: 18,
    occupation:"Full-Stack Web Developer",
    hobbies:["Reading","Listening to Music","Watching Movies"]
}
let myFriendProfile ={
    name:"Alicia",
    age: 18,
    occupation:"Full-Stack Web Developer",
    hobbies:["Drawing","Listening to Music","Watching Movies"]
}
const meAndMyFriendProfile = [myProfile,myFriendProfile]
console.log(meAndMyFriendProfile)

//2nd way to make array of objects
const arrayOfAnimalObjects = [
    {
        name: "Boar",
        type: "Mammal",
        no_of_legs:4

    },
    {
        name: "Hammerhead Shark",
        type: "Fish",
        no_of_legs:0

    }
]
console.log(arrayOfAnimalObjects)


//Add Object to end of array
//Using 'push' array function, add a new animal to arrayOfAnimalObjects
//It has to be an object data type.

arrayOfAnimalObjects.push({    
    name: "Eagle",
    type: "Bird",
    no_of_legs:2
})
console.log(arrayOfAnimalObjects)
    

//Using a foreach loop,output the animals with the format below
//"My number 1 animal is {animal}, it is a {type} and it has{} number of legs"
arrayOfAnimalObjects.forEach((animal,index) => {
    console.log(`My number ${index +1} animal is ${animal.name}, it is a ${animal.type} and it has${animal.no_of_legs} number of legs.`)
})



