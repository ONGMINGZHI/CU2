//Immutable -->cannot change

const name = 'jack'
//name = 'john' //Uncaught TypeError: Assignment to constant variable.


//In the above example,it's not possible to re-assign a new value to the variable 'name'.

//Re-assignment does not work with primitive data-types

//Primitive Data-Types
//1.Boolean
//2.String
//3.Number(technically Integer, Float)
//4.Undefined
//5.Null
//6.BigInt
//7.Symbol

//But Re-assignment works with Non-primitive Data Types (A.K.A Complex Data Types)

//Complex Data Types
//1.Arrays []
//2.Objects {}

//What does 'work' mean? You technically cannot re-assign a new array or object, but you can change the contents.

//For example, pushing a new item into an existing array.

const list =['apple','orange']
list.push('mango')
console.log(list)//['apple', 'orange', 'mango']

//There, the above example, you can clearly changed the const variable content
//It was supposed to be just apple and orrange
//But you added mango by using .push() array function.

//Now, we talk about Objects

//You can also 'change' objects that are constants.

const student = {
    name:'Ze Yu',
    age:18
}
student.age = 21; //You can change the field value
student.hobby = 'taekwondo' //You can even add a new fiels into the object
console.log(student.age) //21
console.log(student.hobby) //taekwondo

//But you cannot re-assign a new object
student = {
    name:'Sky',
    age:18
}
//Uncaught TypeError: Assignment to constant variable.