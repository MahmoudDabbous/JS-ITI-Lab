### Part 3
## Object's Predefined Methods
# 1. Object.keys()
```js
const person = { name: 'John', age: 30 };
const keys = Object.keys(person);
console.log(keys); // Output: ['name', 'age']
```
Object.keys() returns an array containing the keys of the given object.

# 2. Object.values()
```js
const person = { name: 'John', age: 30 };
const values = Object.values(person);
console.log(values); // Output: ['John', 30]
```
Object.values() returns an array containing the values of the given object's enumerable string-keyed properties.

# 3. Object.entries()
```js
const person = { name: 'John', age: 30 };
const entries = Object.entries(person);
console.log(entries); // Output: [['name', 'John'], ['age', 30]]
```
Object.entries() returns an array containing an array of key-value pairs for each enumerable string-keyed property of the given object.

# 4. Object.assign()
```js
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const merged = Object.assign(obj1, obj2);
console.log(merged); // Output: { a: 1, b: 2 }
```
Object.assign() copies the values of all enumerable own properties from one or more source objects to a target object and returns the target object.

# 5. Object.freeze()
```js
const person = { name: 'John', age: 30 };
Object.freeze(person);
person.age = 31; // This change will be ignored in strict mode
console.log(person); // Output: { name: 'John', age: 30 }
```
Object.freeze() makes an object immutable, preventing new properties from being added to it and existing properties from being removed or changed.

# 6. Object.seal()
```js
const car = { brand: 'Toyota', year: 2022 };
Object.seal(car);
car.year = 2023; // Allowed
car.model = 'Corolla'; // Not allowed
console.log(car); // Output: { brand: 'Toyota', year: 2023 }
```
Object.seal() seals an object, preventing new properties from being added to it and marking all existing properties as non-configurable.

# 7. Object.hasOwnProperty()
```js
const person = { name: 'John', age: 30 };
console.log(person.hasOwnProperty('name')); // Output: true
console.log(person.hasOwnProperty('gender')); // Output: false
```
Object.hasOwnProperty() returns a boolean indicating whether the object has the specified property as its own property (not inherited).

# 8. Object.getOwnPropertyNames()
```js
const person = { name: 'John', age: 30 };
const propertyNames = Object.getOwnPropertyNames(person);
console.log(propertyNames); // Output: ['name', 'age']
```
Object.getOwnPropertyNames() returns an array containing the names of all own properties of the given object.

# 9. Object.getPrototypeOf()
```js
function Dog(name) {
  this.name = name;
}
const myDog = new Dog('Buddy');
console.log(Object.getPrototypeOf(myDog) === Dog.prototype); // Output: true
```
Object.getPrototypeOf() returns the prototype (internal [[Prototype]] property) of the specified object.

# 10. Object.is()
```js
console.log(Object.is(5, 5)); // Output: true
console.log(Object.is(5, '5')); // Output: false
console.log(Object.is(+0, -0)); // Output: false
```
Object.is() compares two values for equality. It returns true if the values are the same, and it behaves similarly to the === operator, with a few differences in handling special values like NaN and -0.

## Array's Predefined Methods

# 1. Array.push()
```js
const array = [1, 2, 3];
array.push(4);
console.log(array); // Output: [1, 2, 3, 4]
```
push() adds one or more elements to the end of an array and returns the new length of the array.

# 2. Array.pop()
```js
const array = [1, 2, 3];
const popped = array.pop();
console.log(popped); // Output: 3
console.log(array); // Output: [1, 2]
```
pop() removes the last element from an array and returns that element.

# 3. Array.join()
```js
const array = ['Hello', 'world', '!'];
const joined = array.join(' ');
console.log(joined); // Output: 'Hello world !'
```
join() creates and returns a new string by concatenating all elements in an array, separated by a specified separator.

# 4. Array.slice()
```js
const array = [1, 2, 3, 4, 5];
const sliced = array.slice(1, 3);
console.log(sliced); // Output: [2, 3]
```
slice() returns a shallow copy of a portion of an array into a new array object selected from start to end.

# 5. Array.splice()
```
const array = [1, 2, 3, 4, 5];
const removed = array.splice(2, 2);
console.log(removed); // Output: [3, 4]
console.log(array); // Output: [1, 2, 5]
```
splice() changes the contents of an array by removing or replacing existing elements and/or adding new elements.

# 6. Array.indexOf()
```js
const array = [10, 20, 30, 40, 50];
console.log(array.indexOf(30)); // Output: 2
console.log(array.indexOf(70)); // Output: -1 (not found)
```
indexOf() returns the first index at which a given element can be found in the array, or -1 if it is not present.

# 7. Array.filter()
```js
const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // Output: [2, 4]
```
filter() creates a new array with all elements that pass the test implemented by the provided function.

# 9. Array.map()
```js
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6]
```
map() creates a new array populated with the results of calling a provided function on every element in the calling array.

# 10. Array.reduce()
```js
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // Output: 10
```
reduce() executes a reducer function on each element of the array, resulting in a single output value.

