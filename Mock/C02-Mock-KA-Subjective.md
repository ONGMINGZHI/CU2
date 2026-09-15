# C02 Mock KA — Section B: Subjective Questions

- **Source:** `C02/C02-Mock-KA.docx`
- **Program:** J620-002-4:2020 FRONT-END SOFTWARE DEVELOPMENT (Level 4)
- **Competency unit:** J620-002-4:2020-C02: WEB APPLICATION WITH THIRD PARTY API DEVELOPMENT
- **Code no.:** J620-002-4:2020-C02/KA(1/1)
- **Section B:** 3 questions, 60 marks
- **Section A:** see [C02-Mock-KA-Objective.md](C02-Mock-KA-Objective.md)

**Contents**

- [Section B: Questions](#section-b-questions)
- [Answers & Explanations](#answers--explanations)
  - [Question 1](#question-1-20-marks)
  - [Question 2](#question-2-20-marks)
  - [Question 3](#question-3-20-marks)

---

## Section B: Questions

> The question text is copied word for word from the source document. Only the formatting has changed: code names are shown in backticks, and data and code are in code blocks. Answer-writing space has been removed, except inside the code skeletons, where the blank lines and gaps are kept as printed.

---

**1.** Answer the following questions:

**I.** You have an object:

```js
const employee = { firstName: 'Alice', jobTitle: 'Developer'};
```

Extract the `firstName` and `jobTitle` into separate variables using the destructuring method.

**(4 Marks)**

**II.** You have two arrays:

```js
const cities1 = ['London', 'Berlin'];
const cities2 = ['Tokyo', 'New York'];
```

Create a new array that combines both arrays using the spread operator.

**(4 Marks)**

**III.** You have an array:

```js
const numbers = [1, 2, 3, 4, 5];
```

Find the first number that is greater than 3 using the `find` method and an arrow function.

**(4 Marks)**

**IV.** You have an array:

```js
const ages = [12, 18, 22, 15, 30];
```

Create a new array that contains only ages that are 18 or above using the `filter` method and an arrow function.

**(4 Marks)**

**V.** You have an array of items:

```js
const items = [
  { id: 1, name: 'Laptop' },
  { id: 2, name: 'Phone' },
  { id: 3, name: 'Tablet' }
];
```

Use the `find` method and an arrow function to retrieve the object whose name is 'Phone'.

**(4 Marks)**

---

**2.** Explain the usage and implementation of React Hooks

**I.** Explain the purpose of the `useState` hook in React. Provide a simple code snippet to demonstrate its basic usage.

**(6 Marks)**

**II.** Complete the React component below that fetches user data from the API and displays it.

The API returns data in this format:

```json
{
  "users": [
    {
      "id": 1,
      "name": "John Smith",
      "email": "john@example.com",
      "role": "Developer"
    }
  ]
}
```

```jsx
import {                                       ,                                   } from 'react';
import { getUsers } from ‘./api’;

function UserData() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
       getUsers()
      .then(data => {



      })
  },         );

  return (
    <div className="user-list">
      <h2>User List</h2>
      {users.map(user => (
        <div key={                    } className="user-card">
          <p>Name: {                           }</p>
          <p>Email: {                            }</p>
          <p>Role: {                              }</p>
        </div>
      ))}
    </div>
  );
}
```

**(8 Marks)**

**III.** List and briefly explain two rules that developers must follow when using React Hooks.

**(6 Marks)**

---

**3.** Create a functional React component called `ColorCounter`. Your component should:

- i. Initialize its state with a number called `count`, starting at 0
- ii. When clicking the "Add" button, increase `count` by 1
- iii. When clicking the "Minus" button, decrease `count` by 1
- iv. IV. Display the count in the center, and make it:
  - Red when count is negative
  - Blue when count is positive
  - Black when count is zero

```jsx
import {                                           } from 'react';

function ColorCounter() {
  // Initialize state




  // Event handler to add to count
  const handleAdd = () => {



  };


  // Event handler to subtract from count
  const handleMinus = () => {



  };

  // Helper function to determine text color
  const getTextColor = () => {



  };

  return (
    <div>
      {/* Add button */}
      <button


      >Add</button>


      {/* Count display */}
      <span style={{                                                     }}>
        {                           }
      </span>

      {/* Minus button */}
      <button


      >Minus</button>
    </div>
  );
}
```

**(20 Marks)**

---

## Answers & Explanations

> **About the marks:** the paper only gives a total for each part. The splits in this key are a proposed scheme, based on what each question asks for.

### Marks summary

| Question | Part | Marks | Tests |
|----------|------|-------|-------|
| 1 | I   | 4  | Object destructuring |
| 1 | II  | 4  | Combining arrays with spread |
| 1 | III | 4  | `find` with an arrow function |
| 1 | IV  | 4  | `filter` with an arrow function |
| 1 | V   | 4  | `find` on an array of objects |
| 2 | I   | 6  | Purpose of `useState`, with a code example |
| 2 | II  | 8  | Loading data in `useEffect`, updating state, rendering with `.map` (8 blanks) |
| 2 | III | 6  | Rules of Hooks |
| 3 | —   | 20 | `ColorCounter` component (9 blanks) |
| **Total** | | **60** | |

### Problems found in the source

| Where | Problem | Severity |
|-------|---------|----------|
| Q3 (iv) | "Display the count in the center" can't be done through the skeleton's only style blank. | Medium |
| Q3 (iv) | "IV." is typed twice ("iv. IV. Display…"). | Low |
| Q2-II | The curly quotes in `‘./api’` make the import a syntax error as printed. | Low |
| Q1 III & V | Both parts test `find`, and `map` isn't tested anywhere in Q1. | Low |

---

### Question 1 (20 marks)

**How Q1 is marked (applies to all five parts)**

- **1** — **Declaration:** the result is stored in a variable. For III and V, printing it with `console.log` also counts.
- **2** — **Method:** uses the method or operator the question names, written correctly.
- **1** — **Result:** the code would actually produce the correct values.

Any variable name, `let` or `var` instead of `const`, and missing semicolons are all fine. The right method with a minor syntax slip gets 1 of the 2 method marks, and code that wouldn't run gets no result mark. Using a different method from the one the question names (e.g. `concat`, a `for` loop, dot notation) gets no method marks.

---

#### I. Object destructuring (4 marks)

**Model answer**

```js
const { firstName, jobTitle } = employee;
// firstName → 'Alice', jobTitle → 'Developer'
```

**Explanation:** Object destructuring unpacks properties into variables in one statement. The curly braces on the left list the property keys to take from `employee`.

**Marks**

- **1** — Declares the variables with `const`, `let` or `var`
- **2** — Object destructuring syntax: curly braces on the left, `employee` on the right
- **1** — Uses the keys `firstName` and `jobTitle`, so the variables hold `'Alice'` and `'Developer'`

**Accept:** renamed variables, e.g. `const { firstName: name, jobTitle: title } = employee;`

**Common mistakes**

- `const [firstName, jobTitle] = employee;` — square brackets are for arrays, so this throws `TypeError: employee is not iterable`. **2/4**
- `const { name, title } = employee;` — neither name is a key of `employee`, so both are `undefined`. **3/4**
- `const firstName = employee.firstName;` and so on — gives the right values, but doesn't use destructuring. **2/4**

---

#### II. Spread operator (4 marks)

**Model answer**

```js
const allCities = [...cities1, ...cities2];
// ['London', 'Berlin', 'Tokyo', 'New York']
```

**Explanation:** The spread operator (`...`) expands each array's items into the new array literal. The result is a new, flat array, and `cities1` and `cities2` are unchanged.

**Marks**

- **1** — Stores the new array in a variable
- **2** — Spreads both arrays inside a new array literal: `[...cities1, ...cities2]`
- **1** — The result is one flat array of all four cities

**Accept:** `[...cities2, ...cities1]`, since the question doesn't specify an order.

**Common mistakes**

- `const allCities = [cities1, cities2];` — creates a nested array, `[['London', 'Berlin'], ['Tokyo', 'New York']]`. **1/4**
- `const allCities = cities1.concat(cities2);` — gives the right result, but doesn't use the spread operator. **2/4**
- `const allCities = [...cities1 ...cities2];` — the missing comma is a syntax error. **2/4**

---

#### III. `find` with an arrow function (4 marks)

**Model answer**

```js
const firstAbove3 = numbers.find(num => num > 3);
// 4
```

**Explanation:** `find` checks each element in order and returns the **first** one for which the callback returns `true`, then stops. If nothing matches, it returns `undefined`.

**Marks**

- **1** — Stores the result in a variable (or prints it with `console.log`)
- **2** — `numbers.find()` with an arrow function as the callback
- **1** — Condition `num > 3`, giving `4`

**Accept:** `(num) => num > 3` · `num => { return num > 3; }` · `console.log(numbers.find(n => n > 3));`

**Common mistakes**

- `num >= 3` — returns `3`, which isn't greater than 3. **3/4**
- `numbers.filter(num => num > 3)` — returns `[4, 5]`, an array rather than the first number. **1/4**
- `num => { num > 3 }` — braces without `return` make the callback return `undefined`, so `find` returns `undefined`. **2/4**

---

#### IV. `filter` with an arrow function (4 marks)

**Model answer**

```js
const adults = ages.filter(age => age >= 18);
// [18, 22, 30]
```

**Explanation:** `filter` returns a new array containing **every** element for which the callback returns `true`, and leaves the original array unchanged. "18 or above" means `>= 18`, so 18 itself is included.

**Marks**

- **1** — Stores the new array in a variable
- **2** — `ages.filter()` with an arrow function as the callback
- **1** — Condition `age >= 18`, giving `[18, 22, 30]`

**Accept:** `(age) => age >= 18` · `age => { return age >= 18; }` · `18 <= age`

**Common mistakes**

- `age > 18` — leaves out 18, giving `[22, 30]`. **3/4**
- `ages.map(age => age >= 18)` — gives `[false, true, true, false, true]`. **1/4**
- `ages.find(age => age >= 18)` — returns only `18`. **1/4**

---

#### V. `find` on an array of objects (4 marks)

**Model answer**

```js
const phone = items.find(item => item.name === 'Phone');
// { id: 2, name: 'Phone' }
```

**Explanation:** This works like part III, but each element is an object, so the callback compares the object's `name` property. `find` returns the whole matching object.

**Marks**

- **1** — Stores the result in a variable (or prints it with `console.log`)
- **2** — `items.find()` with an arrow function as the callback
- **1** — Compares `item.name` with `'Phone'`, returning `{ id: 2, name: 'Phone' }`

**Accept:** `==` instead of `===` · a destructured parameter, e.g. `({ name }) => name === 'Phone'`

**Common mistakes**

- `item => item.name = 'Phone'` — a single `=` assigns instead of comparing. The callback always returns a truthy value, so `find` returns the first item after renaming it: `{ id: 1, name: 'Phone' }`. **3/4**
- `item => item === 'Phone'` — compares the whole object with a string, so it returns `undefined`. **3/4**
- `items.filter(item => item.name === 'Phone')` — returns `[{ id: 2, name: 'Phone' }]`, an array rather than the object. **1/4**

> ⚠️ **Problem:** Parts III and V both test `find`, while `map` (the other key array method at this level) isn't tested anywhere in Q1.
>
> **Suggested fix:** Replace part III with a `map` task, e.g. "Create a new array where each number is doubled using the `map` method and an arrow function."

---

### Question 2 (20 marks)

#### I. Purpose of `useState` (6 marks)

**Model answer — explanation**

`useState` is a React Hook that adds **state** to a function component. State is data the component remembers between renders and that can change over time, such as a counter or the text in an input.

- It takes the initial value as its argument and returns an array of two items: the current value and a setter function.
- Calling the setter stores the new value and makes React re-render the component, so the screen shows the update. A normal variable can't do this: it resets on every render, and changing it doesn't trigger a re-render.

**Model answer — code**

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Add 1</button>
    </div>
  );
}
```

**Marks — explanation (3)**

- **1** — Adds state (data that can change and is remembered between renders) to a function component
- **1** — Takes an initial value and returns the current value and a setter function
- **1** — Calling the setter updates the value and re-renders the component

**Marks — code (3)**

- **1** — Imports `useState` and calls it with an initial value inside a function component
- **1** — Destructures the result, e.g. `const [count, setCount] = useState(0)`
- **1** — Shows the state in JSX and updates it through the setter (e.g. in an `onClick`)

**Accept:** any suitable example (a text input, a show/hide toggle, and so on) · `React.useState(...)` · the updater form `setCount(prev => prev + 1)`

**Common mistakes**

- Changing state directly (`count++` or `count = count + 1`) — `count` is a `const`, and even with `let` React wouldn't re-render. No mark for the update point.
- `onClick={setCount(count + 1)}` — calls the setter while rendering, which causes a "Too many re-renders" error. No mark for the update point.
- Describing `useEffect` or props instead of state — no marks for those explanation points.

---

#### II. Complete the `UserData` component (8 marks)

**Model answer**

```jsx
import { useState /* [1] */, useEffect /* [2] */ } from 'react';
import { getUsers } from './api';

function UserData() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers()
      .then(data => {
        setUsers(data.users); /* [3] */
      })
  }, [] /* [4] */);

  return (
    <div className="user-list">
      <h2>User List</h2>
      {users.map(user => (
        <div key={user.id /* [5] */} className="user-card">
          <p>Name: {user.name /* [6] */}</p>
          <p>Email: {user.email /* [7] */}</p>
          <p>Role: {user.role /* [8] */}</p>
        </div>
      ))}
    </div>
  );
}
```

**How it works**

1. `useState([])` starts `users` as an empty array, so `users.map` works on the first render (nothing is shown yet).
2. With `[]` as the dependency array, the effect runs once, after the first render, and calls `getUsers()`.
3. When the data arrives, `setUsers(data.users)` stores the array of users and React re-renders.
4. `users.map` turns each user into a card, with `user.id` as the key.

**Marks (1 per blank)**

| Blank | Answer | Why |
|-------|--------|-----|
| [1] | `useState` | Needed for the `const [users, setUsers]` line |
| [2] | `useEffect` | Needed to run the data loading |
| [3] | `setUsers(data.users)` | The API wraps the array in a `users` property |
| [4] | `[]` | Runs the effect once, when the component mounts |
| [5] | `user.id` | A unique, stable key for each card |
| [6] | `user.name` | |
| [7] | `user.email` | |
| [8] | `user.role` | |

**Accept**

- [1] and [2] in either order.
- [3]: `setUsers(data['users'])`, or `const { users } = data; setUsers(users);`
- [5]: `user.email`, which is also unique for each user.

**Common mistakes (0 for that blank)**

- [3] `setUsers(data)` — stores the whole `{ users: [...] }` object, so `users.map` then throws "users.map is not a function".
- [3] `users = data.users` — `users` is a `const`, and assigning to it wouldn't re-render anyway.
- [4] left empty, or `[users]` — the effect then runs after every render. Each `setUsers` call causes another render and another request, so it never stops.
- [5]–[8] leaving out `user.` (e.g. `{email}`) — those aren't variables in scope, so the code throws a `ReferenceError`.
- [5] `index` — this `map` callback doesn't declare an index, and index keys cause bugs when a list changes order.

> ⚠️ **Problem:** `import { getUsers } from ‘./api’;` uses curly quotes (‘ ’), which are a syntax error in JavaScript. A student who copies the line as printed gets code that won't run.
>
> **Suggested fix:** Use straight quotes: `'./api'`. The model answer above already does.

---

#### III. Two Rules of Hooks (6 marks)

**Model answer**

**Rule 1: Only call Hooks at the top level.**
Call Hooks at the top of the component, before any early `return`. Never call them inside conditions, loops, nested functions or event handlers. React tells Hooks apart by the order they're called in on every render. If a Hook is skipped on some renders, the order shifts, React mixes up the state, and it throws an error such as "Rendered fewer hooks than expected".

```jsx
// ❌ Hook inside a condition
if (isLoggedIn) {
  const [name, setName] = useState('');
}

// ✅ Hook at the top level; the condition goes after it
const [name, setName] = useState('');
if (isLoggedIn) { /* use name here */ }
```

**Rule 2: Only call Hooks from React functions.**
Call Hooks only from function components or custom Hooks (functions whose names start with `use`), not from regular JavaScript functions or class components. Hooks rely on React knowing which component is rendering, so that it can attach the state to it. Called anywhere else, React throws an "Invalid hook call" error.

```jsx
// ❌ Regular function
function getInitialName() {
  const [name, setName] = useState('');
}

// ✅ Custom Hook
function useName() {
  const [name, setName] = useState('');
  return [name, setName];
}
```

**Marks (3 per rule)**

- **1** — States the rule
- **1** — Explains what it means in practice (e.g. not inside `if` or loops; only in components or custom Hooks)
- **1** — Explains why, or gives a correct example

**Accept:** the rules in either order · "custom Hook names must start with `use`" as one of the two rules, since React's tooling relies on it and many course materials teach it as a rule

**Common mistakes**

- General React tips that aren't Rules of Hooks (e.g. "always give list items a `key`", "don't mutate state"). **0 for that rule.**
- Naming a rule without explaining it. **1 of 3.**

---

### Question 3 (20 marks)

**Model answer**

```jsx
import { useState /* [1] */ } from 'react';

function ColorCounter() {
  // Initialize state
  const [count, setCount] = useState(0); /* [2] */

  // Event handler to add to count
  const handleAdd = () => {
    setCount(count + 1); /* [3] */
  };

  // Event handler to subtract from count
  const handleMinus = () => {
    setCount(count - 1); /* [4] */
  };

  // Helper function to determine text color
  const getTextColor = () => {
    /* [5] */
    if (count < 0) return 'red';
    if (count > 0) return 'blue';
    return 'black';
  };

  return (
    <div>
      {/* Add button */}
      <button onClick={handleAdd /* [6] */}>Add</button>

      {/* Count display */}
      <span style={{ color: getTextColor() /* [7] */ }}>
        {count /* [8] */}
      </span>

      {/* Minus button */}
      <button onClick={handleMinus /* [9] */}>Minus</button>
    </div>
  );
}
```

**How it works**

- `count` is held in state, so each click calls `setCount`, React re-renders, and the new number appears.
- `getTextColor()` runs on every render, so the colour always matches the current `count`.
- In JSX, `style` takes a JavaScript object with camelCase CSS property names. The outer braces open a JavaScript expression, and the inner braces are the object.

**Marks (5 per requirement)**

| Requirement | Blank | Answer | Marks | How the marks are given |
|-------------|-------|--------|-------|-------------------------|
| i. Initialise state | [1] | `useState` | 2 | 2 correct · 1 misspelt or wrong case (e.g. `usestate`) |
| | [2] | `const [count, setCount] = useState(0);` | 3 | 1 calls `useState` · 1 initial value `0` · 1 destructures into `[count, setCount]` |
| ii. "Add" increases count | [3] | `setCount(count + 1);` | 3 | 3 correct · 2 right idea with a minor slip · 1 changes `count` directly |
| | [6] | `onClick={handleAdd}` | 2 | 2 correct · 1 casing slip (`onclick`) · 0 `onClick={handleAdd()}` |
| iii. "Minus" decreases count | [4] | `setCount(count - 1);` | 3 | Same as [3] |
| | [9] | `onClick={handleMinus}` | 2 | Same as [6] |
| iv. Coloured count display | [5] | Colour logic (see code) | 3 | 1 for each case that gives the right colour: negative → red, positive → blue, zero → black |
| | [7] | `color: getTextColor()` | 1 | |
| | [8] | `count` | 1 | |
| **Total** | | | **20** | |

**Accept**

- [1]: extra imports such as `useEffect` don't lose marks.
- [2]: any setter name, as long as [3] and [4] use the same one. The state itself must be called `count`.
- [3] and [4]: the updater form, `setCount(prev => prev + 1)`.
- [5]: a ternary (`return count < 0 ? 'red' : count > 0 ? 'blue' : 'black';`), `if / else if / else`, or colour codes such as `'#ff0000'`.
- [6] and [9]: `onClick={() => handleAdd()}`.
- [7]: the colour logic written directly in the style, e.g. `color: count < 0 ? 'red' : count > 0 ? 'blue' : 'black'`. If `getTextColor` is left empty because of this, give the [5] marks for the logic written here.
- [7]: centring CSS (e.g. `textAlign: 'center'`) alongside the colour is accepted, but earns no extra marks (see the problem note below).

**Common mistakes**

- [3]/[4] `count++` or `count = count + 1` — `count` is a `const`, so this throws, and even with `let` React wouldn't re-render. **1 of 3.**
- [5] Logic that puts zero in another case, e.g. `return count < 0 ? 'red' : 'blue';`, so zero shows blue. **2 of 3.**
- [5] Correct conditions but no `return`, so the function returns `undefined` and the colour never changes. **1 of 3.**
- [6]/[9] `onClick={handleAdd()}` — calls the handler while rendering. That updates state, which renders again, and ends in a "Too many re-renders" error. **0.**
- [6]/[9] The handlers swapped (Add calls `handleMinus`). **0.**
- [7] `color: getTextColor` without `()` — passes the function instead of a colour, so no colour is applied. **0.**
- [8] `{getTextColor()}` — shows the colour name instead of the number. **0.**

> ⚠️ **Problem 1:** "Display the count in the center" can't be done through the skeleton. The only style blank is on the `<span>`, and `textAlign` has no effect on an inline element like a span. The skeleton already places the count between the two buttons, so this key counts that as "in the center" and gives no marks for centring CSS.
>
> **Suggested fix:** Change the wording to "Display the count between the two buttons" (the wording `KA_C02.docx` uses), or add a style blank to the `<div>`.

> ⚠️ **Problem 2:** Item iv reads "iv. IV. Display the count…". The "IV." was typed inside an item that Word had already numbered.
>
> **Suggested fix:** Delete the typed "IV.".
