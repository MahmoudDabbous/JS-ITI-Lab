# Assignment: Report

## Abstract Classes

* An abstract class is a class that cannot be instantiated on its own. It serves as a base for other classes to inherit from.
* It may contain abstract methods (methods without implementation) that must be overridden by the subclasses. Abstract methods define the method's signature but leave the implementation details to the inheriting classes.
* Abstract classes can also contain concrete methods (methods with implementations) that are inherited by the subclasses. Subclasses can use, override, or extend these methods.

## Interfaces ( There is no `interface` in JS )

* An interface is a contract that defines a set of methods that a class must implement.
* It only contains method signatures without any implementation details. Any class that implements an interface must provide implementations for all the methods declared in that interface.
* Multiple interfaces can be implemented by a single class, enabling the concept of multiple inheritances of behavior in languages that do not support multiple class inheritance.
