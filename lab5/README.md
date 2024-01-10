# Assignment: Report

## Abstract VS interface

### Abstract Classes

* An abstract class is a class that cannot be instantiated on its own. It serves as a base for other classes to inherit from.
* It may contain abstract methods (methods without implementation) that must be overridden by the subclasses. Abstract methods define the method's signature but leave the implementation details to the inheriting classes.
* Abstract classes can also contain concrete methods (methods with implementations) that are inherited by the subclasses. Subclasses can use, override, or extend these methods.

### Interfaces

* An interface is a contract that defines a set of methods that a class must implement.
* It only contains method signatures without any implementation details. Any class that implements an interface must provide implementations for all the methods declared in that interface.
* Multiple interfaces can be implemented by a single class, enabling the concept of multiple inheritances of behavior in languages that do not support multiple class inheritance.

## Inheritance in function constructor

* Inheritance is achieved through prototypes.
* You can link the prototype of a child constructor to an instance of the parent constructor, allowing the child to inherit properties and methods. This is a form of prototypal inheritance. 
  * In this example showcases inheritance using function constructors. The Child object inherits the greet method from Parent, and also has its own describe method.
  * By making one constructor function (Child) to inherit from another (Parent), we can set Child.prototype to an instance of Parent. This means that Child objects will inherit properties and methods from Parent.prototype.

```js
function Parent(name) {
  this.name = name;
}

Parent.prototype.greet = function() {
  return `Hello, my name is ${this.name}.`;
};

function Child(name, age) {
  Parent.call(this, name);
  this.age = age;
}

Child.prototype.describe = function() {
  return `${this.name} is ${this.age} years old.`;
};

Child.prototype = Object.create(Parent.prototype);

const parent = new Parent('Osama');
const child = new Child('Mahmoud', 10);

console.log(parent.greet()); // Output: Hello, my name is Osama.
console.log(child.greet(), child.describe()); // Output: Hello, my name is Mahmoud. Output: Mahmoud is 10 years old.
```
