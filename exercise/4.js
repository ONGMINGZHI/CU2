const book = {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    characters: ['Bilbo', 'Gandalf', 'Thorin', 'Smaug'],
    publication: {
        year: 1937,
        publisher: 'George Allen & Unwin'
    }
};

//1. Destructuring Assignment
const { title,author,characters,publication:{year,publisher} } = book

//2. Spread Operator
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = {...obj1,...obj2}
console.log(obj3)
const obj4 = {...obj1}
console.log(obj4)

//3. Destructuring and Spread Together
const data = {
    numbers1: [1, 2, 3, 4],
    numbers2: [5, 6, 7, 8]
};
const [numbers1, numbers2] = data;
console.log( array1); // [1,2,3,4]
console.log( array2); // [5,6,7,8]



