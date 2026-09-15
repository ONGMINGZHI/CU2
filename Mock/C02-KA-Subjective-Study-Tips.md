# C02 Section B: Study Tips

**Competency unit:** C02 Web Application with Third Party API Development. Knowledge Assessment, Section B (Subjective)

**Contents**

- [What Section B looks like](#what-section-b-looks-like)
- [What to revise](#what-to-revise)
- [Short JavaScript tasks](#short-javascript-tasks)
- [Explaining React Hooks](#explaining-react-hooks)
- [Completing React code](#completing-react-code)
- [In the exam room](#in-the-exam-room)
- [Practice questions](#practice-questions)
- [Answers](#answers)

---

## What Section B looks like

Section B is worth **60 marks**: three questions of 20 marks each. You write every answer by hand, including code, in the space on the paper.

| Question | What you do | Marks |
|----------|-------------|-------|
| 1 | Five short JavaScript tasks. Each gives you some data and asks for one result using a method or operator it names (e.g. destructuring, spread, `map`, `filter`). | 5 × 4 = 20 |
| 2 | React Hooks: explain how Hooks work, in words and with short code examples, and complete a component that uses Hooks. | 20 |
| 3 | Complete a React component from a code skeleton: create the state, write the event handlers and fill in the JSX. | 20 |

The whole paper (Sections A and B) lasts 2.5 hours, so plan your time. See [In the exam room](#in-the-exam-room).

---

## What to revise

Only tick an item when you can **write** it from memory, on paper, without notes. Being able to read code isn't the same as being able to write it.

**JavaScript**

- [ ] Object destructuring `const { name, age } = user;` and array destructuring `const [first, second] = list;`
- [ ] Spread with arrays `[...a, ...b]` and with objects `{ ...obj, key: value }`
- [ ] Arrow functions, with and without `{ }`
- [ ] `map`, `filter` and `find`, and what each one returns
- [ ] Comparison operators: `>`, `>=`, `<`, `<=`, `===`

**React**

- [ ] `useState`: what it's for, how to create state and how to change it
- [ ] `useEffect`: what it's for, and what the dependency array controls
- [ ] The Rules of Hooks, and why they exist
- [ ] Event handlers such as `onClick={handleClick}`
- [ ] Showing values in JSX with `{ }`, and inline styles with `style={{ }}`
- [ ] Rendering a list with `map` and a `key`
- [ ] Loading API data with `fetch` and `.json()`, and finding the array inside the response
- [ ] Saving and reading values with `localStorage.setItem` and `localStorage.getItem`

---

## Short JavaScript tasks

Markers usually look for three things in each task: the result is stored in a variable, the method the question names is used correctly, and the code gives the right result.

### Tip 1: Use the method the question names

If the question says "using the spread operator", use `...`, even if you know another way. A correct answer that uses `concat` or a `for` loop can still lose the marks for the method.

### Tip 2: Store the result

Questions say things like "create a new array" or "extract into variables". Show where the result goes: `const result = ...`.

### Tip 3: Know what each array method returns

| Method | Returns | Example |
|--------|---------|---------|
| `map` | A new array of the **same length**, with every item changed | `[1, 2, 3].map(n => n * 10)` → `[10, 20, 30]` |
| `filter` | A new array with **only** the items that pass the test | `[1, 2, 3].filter(n => n > 1)` → `[2, 3]` |
| `find` | The **first** item that passes (not an array), or `undefined` | `[1, 2, 3].find(n => n > 1)` → `2` |
| `forEach` | `undefined`, so don't use it to create a new array | |

### Tip 4: If an arrow function has `{ }`, it needs `return`

```js
const prices = [5, 8];

const a = prices.map(p => p + 1);             // ✅ [6, 9]
const b = prices.map(p => { return p + 1; }); // ✅ [6, 9]
const c = prices.map(p => { p + 1 });         // ❌ [undefined, undefined]
```

### Tip 5: Turn the question's words into the right operator

"greater than" → `>` · "50 or above" / "at least 50" → `>=` · "less than" → `<` · "equal to" → `===`

Using `>` when the question says "or above" is an easy way to lose a mark.

### Tip 6: Use the right brackets

```js
const user = { name: 'Aina', course: 'FSD' };
const { name, course } = user;        // ✅ objects use { }, matched by key name
const [x, y] = ['a', 'b'];            // ✅ arrays use [ ], matched by position

const a = [1, 2];
const b = [3];
const joined = [...a, ...b];          // ✅ [1, 2, 3]
const nested = [a, b];                // ❌ [[1, 2], [3]], because the ... is missing

const withAge = { ...user, age: 20 }; // ✅ { name: 'Aina', course: 'FSD', age: 20 }
```

Key names are case-sensitive: `const { Name } = user;` gives `undefined`.

### Tip 7: Write the result as a comment

Add the result after your code, e.g. `// [78, 92]`. To write it, you have to trace your code with the real data, which catches mistakes. It also shows the marker that you know what the code does.

---

## Explaining React Hooks

An "explain" question needs more than one sentence. For each Hook, practise covering these four points:

1. **What it's for**, in one sentence
2. **How you use it:** what you pass in and what you get back
3. **What happens next:** when it runs, or what React does afterwards
4. **A short code example** that you can write from memory

**Example: explaining `useEffect`**

1. `useEffect` runs code **after** a component renders. It's for work that isn't part of drawing the page, such as loading data from an API or saving to local storage.
2. You pass it a function, and usually a dependency array that controls when the function runs again.
3. React runs the function after the first render, then again whenever a value in the dependency array changes.
4. Example:

```jsx
useEffect(() => {
  fetch('https://api.example.com/books')
    .then(response => response.json())
    .then(data => setBooks(data));
}, []);
```

| Dependency array | The effect runs… |
|------------------|------------------|
| `[]` | Once, after the first render |
| `[count]` | After the first render, and again whenever `count` changes |
| Left out | After every render |

**Questions about rules or reasons:** state the rule, say what it means in practice, then explain *why* or give an example. Just naming a rule usually isn't enough for full marks.

---

## Completing React code

A code skeleton gives you most of a component, with blanks for you to fill in.

### Tip 1: Read the whole skeleton first

Look for the names it already uses, such as `count`, `setCount` or `handleAdd`. Your answers must use the **same names**. If the question names something (e.g. "a number called `count`"), use exactly that name.

### Tip 2: Check the imports last

Every Hook you use must be imported. The number of blanks in the `import` line tells you how many Hooks you need.

```jsx
import { useState, useEffect } from 'react';
```

### Tip 3: Create and change state the React way

```jsx
const [count, setCount] = useState(0); // ✅ [value, setter] = useState(starting value)

setCount(count + 1); // ✅ change state with the setter
count++;             // ❌ count is a const, and React wouldn't re-render anyway
```

### Tip 4: Give `onClick` a function, don't call it

- ✅ `<button onClick={handleAdd}>Add</button>`
- ✅ `<button onClick={() => handleAdd()}>Add</button>`
- ❌ `<button onClick={handleAdd()}>Add</button>`: the brackets run the function while the page is drawn, not when it's clicked. If it changes state, React shows a "Too many re-renders" error.
- ❌ `<button onclick={handleAdd}>Add</button>`: React event names are camelCase, so it must be `onClick`.

### Tip 5: Show values with `{ }` and styles with `{{ }}`

- `<p>Total: {total}</p>`
- `<span style={{ color: 'red', fontSize: '20px' }}>`: the outer braces switch to JavaScript, and the inner braces are an object. CSS names are camelCase (`fontSize`, not `font-size`).

### Tip 6: Lists need `map`, the item name and a `key`

```jsx
{books.map(book => (
  <li key={book.id}>{book.title}</li>
))}
```

Inside `map`, put the item name in front of every property: `book.title`, not `title`.

### Tip 7: Check the shape of the API data

Read the sample JSON in the question carefully. If it looks like `{ "books": [ ... ] }`, the array is inside `books`, so store `data.books`, not `data`.

With `fetch`, remember the extra step: `response.json()` turns the response into data you can use.

### Tip 8: `localStorage` stores text

`localStorage.setItem('score', 10)` saves the text `"10"`. If you need a number when you read it back, convert it: `Number(localStorage.getItem('score'))`.

### Tip 9: Trace your finished component

Ask yourself: *What shows on the first render? What happens after one click? After two?* This catches most mistakes, such as a missing setter or the wrong dependency array.

---

## In the exam room

- **Plan your time.** 2.5 hours for 100 marks is about 1.5 minutes per mark. That gives Section B about 90 minutes: roughly 30 minutes per question, or 6 minutes per 4-mark task. Aim to finish with 10 minutes to spare for checking.
- **Answer every part.** A sensible attempt can still earn some marks, but a blank earns nothing.
- **Write code neatly.** Put one statement on each line, indent the code inside `{ }`, and check that every `(`, `[` and `{` has a closing partner.
- **Put text in quotes.** Write `'Penang'`, not `Penang`. Without quotes, JavaScript looks for a variable with that name.
- **Stuck on the exact syntax?** Write your best attempt and add a short comment saying what the line should do. It shows the marker you understand the idea.
- **Re-read the question when you finish.** Check that you used the method it names and the names it gives, and that you matched its exact condition ("above" isn't the same as "or above").

---

## Practice questions

Do these on paper first, without notes and without running the code. Then check the [answers](#answers).

### Short JavaScript tasks (4 marks each)

**P1.**

```js
const phone = { brand: 'Samsung', model: 'A55', price: 1499 };
```

Extract `brand` and `price` into variables using destructuring.

**P2.**

```js
const menu = ['Nasi lemak', 'Roti canai'];
```

Using the spread operator, create a new array with everything in `menu` plus `'Teh tarik'` at the end. `menu` must not change.

**P3.**

```js
const settings = { theme: 'light', fontSize: 14 };
```

Using the spread operator, create a new object where `theme` is `'dark'` and `fontSize` stays the same.

**P4.**

```js
const scores = [45, 78, 50, 92, 38];
```

Using `filter` and an arrow function, create a new array of the scores that are 50 or above.

**P5 and P6** use this array:

```js
const products = [
  { id: 1, name: 'Mouse', price: 45 },
  { id: 2, name: 'Keyboard', price: 120 },
  { id: 3, name: 'Monitor', price: 650 }
];
```

**P5.** Using `map` and an arrow function, create a new array containing only the product names.

**P6.** Using `find` and an arrow function, get the first product that costs more than 100.

### Explaining (4 marks)

**P7.** Explain why React needs a `key` when you render a list with `map`. Give a short example.

### Completing code

**P8. (8 marks)** The API at `https://api.example.com/products` returns:

```json
{
  "products": [
    { "id": 1, "name": "Mouse", "price": 45 },
    { "id": 2, "name": "Keyboard", "price": 120 }
  ]
}
```

Complete the component so that it loads the products once, when it first appears, and lists each product's name and price.

```jsx
import { ____(1)____, ____(2)____ } from 'react';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://api.example.com/products')
      .then(response => response.____(3)____)
      .then(data => {
        ____(4)____
      });
  }, ____(5)____);

  return (
    <ul>
      {products.map(product => (
        <li key={____(6)____}>
          {____(7)____} (RM{____(8)____})
        </li>
      ))}
    </ul>
  );
}
```

**P9. (10 marks)** Complete a `QuantityPicker` component for an online shop. It should:

- i. Keep a state value called `quantity`, starting at 1.
- ii. Increase `quantity` by 1 when "+" is clicked.
- iii. Decrease `quantity` by 1 when "-" is clicked, but never go below 1.
- iv. Show the quantity between the two buttons, and the total price underneath. Each item costs RM12.

```jsx
import { ____(1)____ } from 'react';

function QuantityPicker() {
  // Create the quantity state
  ____(2)____

  const handleIncrease = () => {
    ____(3)____
  };

  const handleDecrease = () => {
    ____(4)____
  };

  return (
    <div>
      <button ____(5)____>-</button>
      <span>{____(6)____}</span>
      <button ____(7)____>+</button>
      <p>Total: RM{____(8)____}</p>
    </div>
  );
}
```

---

## Answers

### P1

```js
const { brand, price } = phone;
// brand → 'Samsung', price → 1499
```

Use curly braces because `phone` is an object. The names must match its keys exactly.

### P2

```js
const fullMenu = [...menu, 'Teh tarik'];
// ['Nasi lemak', 'Roti canai', 'Teh tarik']
```

- ❌ `[menu, 'Teh tarik']` puts the whole array inside the new one: `[['Nasi lemak', 'Roti canai'], 'Teh tarik']`.
- ❌ `menu.push('Teh tarik')` changes `menu` itself and doesn't use spread.

### P3

```js
const darkSettings = { ...settings, theme: 'dark' };
// { theme: 'dark', fontSize: 14 }
```

Order matters, because properties written later win. `{ theme: 'dark', ...settings }` copies `theme: 'light'` over the top, so `theme` ends up `'light'` again.

### P4

```js
const passed = scores.filter(score => score >= 50);
// [78, 50, 92]
```

"50 or above" includes 50, so use `>=`. With `>`, the 50 would be left out.

### P5

```js
const names = products.map(product => product.name);
// ['Mouse', 'Keyboard', 'Monitor']
```

`map` gives one result for every item. ❌ `product => product` would return the whole objects instead of just the names.

### P6

```js
const expensive = products.find(product => product.price > 100);
// { id: 2, name: 'Keyboard', price: 120 }
```

`find` stops at the **first** match, so the Monitor isn't included. `filter` would return an array of both.

### P7

- A `key` gives each list item an identity that stays the same between renders.
- When the list changes (an item is added, removed or moved), React uses the keys to match each item with its previous version. It then updates only what changed, and each item keeps its own state.
- The key should be unique and stable, such as an ID from the data. Avoid using the array index if the list can change order. Without keys, React shows a warning in the console.

```jsx
<ul>
  {students.map(student => (
    <li key={student.id}>{student.name}</li>
  ))}
</ul>
```

### P8

```jsx
import { useState /* (1) */, useEffect /* (2) */ } from 'react';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://api.example.com/products')
      .then(response => response.json() /* (3) */)
      .then(data => {
        setProducts(data.products); /* (4) */
      });
  }, [] /* (5) */);

  return (
    <ul>
      {products.map(product => (
        <li key={product.id /* (6) */}>
          {product.name /* (7) */} (RM{product.price /* (8) */})
        </li>
      ))}
    </ul>
  );
}
```

- **(3)** `fetch` gives you a response, and `.json()` turns it into data.
- **(4)** The array is inside `products`, so store `data.products`. With `setProducts(data)`, `products` would be an object, and `products.map` would fail.
- **(5)** `[]` loads the data only once. Without it, the effect runs after every render. Each `setProducts` call then causes another render and another request, so the requests never stop.
- **(6)–(8)** Inside `map`, put `product.` in front of each property.

### P9

```jsx
import { useState /* (1) */ } from 'react';

function QuantityPicker() {
  // Create the quantity state
  const [quantity, setQuantity] = useState(1); /* (2) */

  const handleIncrease = () => {
    setQuantity(quantity + 1); /* (3) */
  };

  const handleDecrease = () => {
    if (quantity > 1) { /* (4) */
      setQuantity(quantity - 1);
    }
  };

  return (
    <div>
      <button onClick={handleDecrease /* (5) */}>-</button>
      <span>{quantity /* (6) */}</span>
      <button onClick={handleIncrease /* (7) */}>+</button>
      <p>Total: RM{quantity * 12 /* (8) */}</p>
    </div>
  );
}
```

- **(2)** The question names the state `quantity` and says it starts at 1, so use `useState(1)`, not `useState(0)`.
- **(4)** Check the value before subtracting, so it can't go below 1. `setQuantity(Math.max(1, quantity - 1));` also works.
- **(5) and (7)** Give each button its handler without `()`, and make sure "-" gets the decrease handler.
- **(8)** Work out the total from `quantity` inside the JSX. You don't need a separate state for it.
