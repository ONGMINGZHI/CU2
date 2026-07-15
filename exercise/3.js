const student = {
    id: '101',
    name: 'John Doe',
    courses: ['Math', 'English', 'Science'],
    parents: {
        father: 'Mr. Doe',
        mother: 'Mrs. Doe'
    }
};

//1.
const { id,name,courses, parents:{father,mother} } = student
console.log(id); // 101
console.log(name); // John Doe 
console.log(father); // Mr. Doe

//2. Spread Operator
const arr1 = [1, 2, 3]; 
const arr2 = [4, 5, 6];
const arr3 = [...arr1,...arr2]
console.log(arr3)
const arr4 = [...arr1]
console.log(arr4)

//3. Destructuring and Spread Together
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const firstHalf =[n1, n2, n3, n4, n5]
// const [n1,n2,n3,n4,n5, ...secondHalf] = numbers
// console.log(firstHalf) 
// console.log(secondHalf)

//4. Spread Operator with Functions
const numbers = [ 1, 2, 3 ];

function sum(a, b, c) {
    return a + b + c;
}
console.log(sum(...numbers)); 

