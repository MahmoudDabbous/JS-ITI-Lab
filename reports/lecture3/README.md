# Assignment: Report

## 1. `find()`

```js
const numbers = [10, 20, 30, 40, 50]; 
const found = numbers.find(num => num > 25); 
console.log(found); // Output: 30
```

* `find()` method returns the first element in the array that satisfies the provided testing function.
* It iterates through the array and returns the first element for which the provided function returns true.
* If no element satisfies the condition, it returns `undefined`.
* It doesn't modify the original array.

## 2. `forEach()`

```js
const numbers = [1, 2, 3]; 
numbers.forEach(num => console.log(num * 2)); // Output: 2 4 6
```

* `forEach()` executes a provided function once for each array element.
* It doesn't return anything.
* It's used mainly for its side effects, such as logging, updating variables, or modifying objects outside the loop.

## 3. `map()`

```js
const numbers = [1, 2, 3]; 
const doubled = numbers.map(num => num * 2); 
console.log(doubled); // Output: [2, 4, 6]
```

* `map()` creates a new array by calling a provided function on every element in the calling array.
* It returns a new array with the results of the provided function for each element.
* It doesn't modify the original array; it creates a new one with transformed elements.
