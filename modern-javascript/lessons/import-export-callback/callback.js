//The 'callback' argument CAN act as a function
function greet(callback) {
  console.log('Hello!');
  //Over here, it's calling the argument as a function
  callback();
}

//Notice there's a function INSIDE the 'greet' function call
greet(function sayName() {
  console.log('John Doe');
}); 
// Outputs: Hello!
// Outputs: John Doe

//NO CALLBACK
//The argument is 'name'
function noCallnackGreeting(name){
    //Over here, you are using 'name' as a variable string to pass it into console.log
    console.log(`My name is ${name}.`)
}

noCallnackGreeting("Ming Zhi")
// Outputs: My name is Ming Zhi.

//I want a function that does addition first, then squares the result and then console logs the squared result.

const calculateSum =(num1, num2, squareFunction) =>{
    const sum =num1 +num2
    squareFunction(sum)
}

const squareAndLog = (number) =>{
    console.log(number**2)
}
calculateSum(5,4,squareAndLog)


//Aditional exercises
//1)
const processName = (firstName,lastName,formatCallback) =>{
    const fullName =`${firstName} ${lastName}`.toUpperCase();
    formatCallback(fullName)
}
const greetUser = (formattedName) =>{
    console.log(`Hello, ${formattedName} ! Welcome aboard.`)
}
processName("alex", "smith", greetUser)
//Hello, ALEX SMITH ! Welcome aboard.

//2)


//Asynchronous Callbacks

//What is Synchronous?
//-Synchronous means occurring, operating, or existing at exactly the same time.
//while Asynchronous means events or communications that do not happen at the same time or require immediate, real-time coordination(后台发生的事情)

function dummyDownload(url, callback) {
  
  //To stimulate the download
  setTimeout(() => {
    console.log(`Downloaded data from ${url}`);
    //Once the 'download' is complete, use callback function to process the data
    callback();
  }, 2000)
  // As if you are downloading actual data
  console.log("Downloading data...")
}

dummyDownload('https://google.com', function process() {
  console.log('Now I am processing the data...');
});

// Downloading data...
// Downloaded data from https://google.com
// Now I am processing the data...