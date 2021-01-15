# Inheritance

Inheritance allows you to create new classes that reuse, extend and modify the
behavior of an other class. The class which we inherit from is called the base
(or parent) class and the class that inherits from the base class is the derived
(or child) class.

## Materials & Resources

- Before starting the materials do [this little exercise](before/java.md)

| Material                                                                                                            |  Time |
| :------------------------------------------------------------------------------------------------------------------ | ----: |
| [Java Inheritance Tutorials Theory (slidenerd 46)](https://www.youtube.com/watch?v=i2ghIckPZfE)                     | 14:06 |
| [Java Inheritance Tutorials Example (slidenerd 47)](https://www.youtube.com/watch?v=PHden2Po8YU)                    | 10:16 |
| [Inheritance & Polymorphism (Bana.14)](https://www.youtube.com/watch?v=Lsdaztp3_lw)                                 | 13:04 |
| [Usage of super keyword](http://www.javatpoint.com/super-keyword)                                                   |       |
| [Access modifiers (Public, Protected, Private, Default) (EJ Media 17)](https://www.youtube.com/watch?v=aRQRV2PMHtk) |  7:53 |
| [Java Encapsulation with Example - Java Programming Tutorial](https://www.youtube.com/watch?v=szYzBC89CPE)          |  1:08 |
| [Java Getters & Setters, Encapsulation with Code Examples Tutorial](https://www.youtube.com/watch?v=zjSFZJp1pY4)    |  7:23 |
| [Getters and setters (Rakshith Vasudev 11)](https://www.youtube.com/watch?v=Z12IEPyh0fc)                            | 24:04 |

## Optional materials

| Material                                                                                              |  Time |
| :---------------------------------------------------------------------------------------------------- | ----: |
| [Java Package Example (slidernerd 69)](https://www.youtube.com/watch?v=FjgnIYMBhDA)                   | 11:43 |
| [Access Modifiers (Javadocs)](https://docs.oracle.com/javase/tutorial/java/javaOO/accesscontrol.html) |       |

## Material Review

- What is a package?
  <!--
    A package can be defined as a grouping of related classes providing access
    protection and namespace management. Pretty much a directory with the
    grouped class files.
  -->
- Why are we using packages?
  <!--
    Packages are used in Java in order to prevent naming conflicts, to control
    access, to make searching/locating and usage easier of classes.
  -->
- What is inheritance?
  <!--
    Different kinds of objects often have a certain amount in common with each
    other. Mountain bikes, road bikes, and tandem bikes, for example, all share
    the characteristics of bicycles (current speed, current pedal cadence,
    current gear). Yet each also defines additional features that make them
    different: tandem bicycles have two seats and two sets of handlebars; road
    bikes have drop handlebars; some mountain bikes have an additional chain
    ring, giving them a lower gear ratio.

    https://docs.oracle.com/javase/tutorial/java/concepts/inheritance.html
  -->
- What is a base class?
  <!--
    Superclass is the class from where a subclass inherits the features. It is
    also called a base class or a parent class.
  -->
- What is a derived class?
  <!--
    Subclass is a class which inherits the other class. It is also called a
    derived class, extended class, or child class.
  -->
- What's the difference between the *is-a* and *has-a* relationship?
  <!--
    A house has a room while water is a drink.
    The VW Beatle is a car, but the Garage is not a car, but has a car.

    It is an easy way to determine whether you should use inheritance or not at
    the beginning.
  -->
- Why is inheritance useful?
  <!--
    For Method Overriding (so runtime polymorphism can be achieved).
    For Code Reusability.
  -->
- What is the usage of the `super` keyword?
  <!--
    Super can be used to refer immediate parent class instance variable.
    Super can be used to invoke immediate parent class method.
    Super() can be used to invoke immediate parent class constructor.
  -->
- What are the access modifiers?
  <!--
    Access modifiers (or access specifiers) are keywords in object-oriented
    languages that set the accessibility of classes, methods, and other members.
    Access modifiers are a specific part of programming language syntax used to
    facilitate the encapsulation of components.

    Protected, package private.

    The access modifier in the parent class can't be looser than in the subclass
    because it would harm the polymorphism.
  -->
- What is polymorphism?
  <!--
    Within an inheritance hierarchy, a subclass can override a method of its
    superclass. That enables the developer of the subclass to customize or
    completely replace the behavior of that method.
    Both methods, implemented by the super- and subclass, share the same name
    and parameters but provide different functionality.
  -->
- When do you need to use the `@Override` annotation?
  <!--
    Use it every time you override a method for two benefits. Do it so that you
    can take advantage of the compiler checking to make sure you actually are
    overriding a method when you think you are. This way, if you make a common
    mistake of misspelling a method name or not correctly matching the
    parameters, you will be warned that you method does not actually override as
    you think it does. Secondly, it makes your code easier to understand because
    it is more obvious which methods are overwritten.
  -->
- What is the difference between overriding and overloading?
  <!--
    Overriding means that you are implementing an inherited method while
    overloading means that you are creating a method with the same name but
    different parameters.
  -->
- How to safely cast a variable from one type to another?
  <!--
    Use the 'instanceof' operator and (Type).
  -->
- What is the difference between implicit and explicit casting?
  <!--
    Implicit casting or widening or automatic type conversion can happen if both
    type are compatible and target type is larger than source type.
    For example byte -> short -> int -> long -> float -> double

    Explicit casting or narrowing is required when you are assigning a larger
    type to a smaller type.
    For example double -> float -> long -> int -> short -> byte
    https://www.javainterviewpoint.com/type-casting-java-implicit-explicit-casting/
  -->
- What is the usage of the `final` keyword?
  <!--
    Final classes can't be inherited.
    Final methods can't be overridden.
  -->

### Person.java

```java
public class Person {

  private String name;
  private int age;

  public Person(String name, int age) {
    this.name = name;
    this.age = age;
  }
}
```

### Student.java

```java
public class Student extends Person {

  private String classroom;

  public Student(String name, int age, String classroom) {
    super(name, age);
    this.classroom = classroom;
  }
}
```

## Workshop

- [Green Fox Organization](exercises/01-green-fox/java.md)
- [Garden Application](exercises/02-garden-app/README.md) *exam*
- [Aircraft Carrier](exercises/03-aircraft-carrier/README.md)
