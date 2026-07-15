const books = [
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', ratings: 5 },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee', ratings: 4.5 },
  { title: '1984', author: 'George Orwell', ratings: 4.7 },
  { title: 'The Catcher in the Rye', author: 'J.D. Salinger', ratings: 4 },
  { title: 'Moby-Dick', author: 'Herman Melville', ratings: 3.5 },
];

//1. .filter() and Arrow Functions
const ratingsGreaterThan4 = books.filter(book => book.ratings > 4) 
console.log(ratingsGreaterThan4)

//2. .map() method and Arrow Functions
const newArray = books.map(book => book.title);
console.log(newArray); 

//3. .find() method and Arrow Functions
const bookWithTitle1984 = books.find(book => book.title === '1984');
console.log(bookWithTitle1984); 

//4. .sort() method and Arrow Functions
 const descendingOrder = books.sort((a, b) => b.ratings - a.ratings);
console.log(descendingOrder)

//5. Chaining Methods
const bookWithHighestRatings = books.sort((a, b) => b.ratings - a.ratings)[0].title;
console.log(bookWithHighestRatings); 
