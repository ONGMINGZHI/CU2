//Destructuring Objects ****EXAM!!!!*****

//You can destructure objects into smaller parts (individual variables) by using the Destructuring Assignment Operator

//Example without Destructuring

const user = {
    name:'John Doe',
    age:28
}

const name = user.name
const age = user.age

console.log(name)
console.log(age)

//Example with Destructuring

const anotherUser = {
    anotherName:'Han Chuan',
    anotherAge:25
}

const { anotherName,anotherAge } = anotherUser //This is the destructuring

console.log(anotherName) //Han Chuan
console.log(anotherAge) //25

//Basucally, it's a fancy way of extracting values into individual variables.

const student ={
    studentName:"Alicia",
    studentAge:18,
    studentGrade:"Diploma"
}

//Destructure the above student for me, and output their values.
const { studentName,studentAge,studentGrade } = student

console.log(studentName) //Alicia
console.log(studentAge) //18
console.log(studentGrade) //Diploma

//Destructuring a Nested Object

const player = {
    playerName: "Lee Sang-Heok",
    playerAge:30,
    playerGame:"League of Legends",
    team:{
        teamName:"T1",
        position:"Mid laner"
    } //These values inside 'team', a nested object inside player can akso be extracted by using the destructuring operator
}

//                                         Here is how you do it
const { playerName, playerAge, playerGame, team:{teamName,position}} =player

console.log(teamName) //T1
console.log(position) //Mid laner

//Destructuring Arrays

const colors = ['red','green','yellow']

const[firstColor,secondColor,thirdColor] = colors

console.log(firstColor) //red
console.log(secondColor) //green
console.log(thirdColor) //yellow

//Can use other words to represent the colors?
const[lalala,lululu,lelele] =colors

console.log(lalala) //red
console.log(lululu) //green
console.log(lelele) //yellow

//Yes, you can!

//Can you skip a position in an array?
const [iWantFirstOne, , butSkipSecondOne] = colors

console.log(iWantFirstOne) //red
console.log(butSkipSecondOne) //yellow

//No green :(

//Destructuring Function Parameters

//Without Destructuring Function Parameters
function greetPerson(person){
    console.log(`Hello, ${person.name}. You are ${person.age} years old.`)
}
const person = {
    personName:"Ming Zhi",
    personAge:18
}
greetPerson(person)

//WITH Destructuring Function Parameters
                            //You are directly destructuring the argument.
function destructureGreetPerson({personName,personAge}){
    //Notice you do not have to specify person object anymore
    console.log(`Hello, ${personName}. You are ${personAge} years old.`)
}
destructureGreetPerson(person)

//Default Values with Destructuring

//Using the 'person' object as an example, we can destructure and if there is a field with no actual value from the original object
//It's possible to give it a default value.

                                       //giving a default value here
const { personName,personAge, profession ='student'} =person
console.log(personName); //Ming Zhi
console.log(personAge); //18
console.log(profession); //student

//Default Balues for Array Destructuring

const fruits = ['apple','orange']

const[firstFruit,secondFruit,thirdFruit ='strawberry'] =fruits

console.log(firstFruit) //apple
console.log(secondFruit) //orange
console.log(thirdFruit) //strawberry