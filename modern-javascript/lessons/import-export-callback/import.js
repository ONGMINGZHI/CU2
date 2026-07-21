import { add, subtract } from './mathOperationsExport.js';
import doSomething from './defaultExport.js';
//Notice how doSomething does not require curly brackets, becayse it is a default export.

console.log(add(2, 3)); // Outputs: 5
console.log(subtract(5, 2)); // Outputs: 3

doSomething()