# Abstracts & Interfaces

*There are times when we need common features in classes but they don't work on
their own.*

In some situations either:

- we want to inherit from multiple classes
- the base classes have expectations in order to be used, or in order to support
  a much larger framework.

Java gets round this through Abstracts and Interfaces.

## Materials & Resources

### Training

| Material                                                                                           |  Time |
| :------------------------------------------------------------------------------------------------- | ----: |
| [Refresher on Inheritance and Polymorphism (Guru.08)](https://www.youtube.com/watch?v=gWpg3yMiL0M) |  3:03 |
| [Java Interface Tutorial](https://www.youtube.com/watch?v=NnZQ-C0x4hs)                             |  5:28 |
| [Java Interfaces Explained](https://www.youtube.com/watch?v=KAKtFcvSKp0)                           | 11:47 |
| [Java Comparable Interface](https://www.youtube.com/watch?v=swEvHhN9l8k)                           | 10:36 |
| [Abstract Classes and methods](https://www.youtube.com/watch?v=uOd1RrmNZYk)                        | 15:23 |
| [Abstract and Concrete Classes (NewBoston.58)](https://www.youtube.com/watch?v=TyPNvt6Zg8c)        |  8:26 |
| [When to use an abstract class in Java (Degee.39)](https://www.youtube.com/watch?v=hZ1EU-F-0nU)    |  4:25 |

### Optional

| Material                                                                                                  |    Time |         |
| :-------------------------------------------------------------------------------------------------------- | ------: | ------- |
| [Abstract Classes and Interfaces (Wertz)](https://www.youtube.com/watch?v=AU07jJc_qMQ)                    |   26:33 |         |
| [Interfaces and Abstracts (Bana.15)](https://www.youtube.com/watch?v=1PPDoAKbaNA)                         |    8:29 |         |
| [Java Comparable Interface](https://dzone.com/articles/java-comparable-interface-in-five-minutes)         | reading |         |
| [Diamond problem](assets/diamond_problem.png)                                                             | reading |         |
| [Comparator (mkyong)](https://www.mkyong.com/java/java-object-sorting-example-comparable-and-comparator/) |         | reading |

## Material Review

### Basic definitions

- What is interface?

  <!--
    Just think through what the word means.
    Eg.: User Interface is what you can do with an application.
    Interfaces have the same goal, define what we want to do with different things.
    The interface is a collection of methods, these are the actions that can be called on the implementer classes.
    Interfaces say nothing about implementation, they tell you what kind of methods you need to implement.

    You can look at interfaces like a contract. If you want to happen something good to your class then you must provide some method.
  -->

- Do we have naming conventions about interfaces?
  <!--
    Since interfaces tell us what can we do with a class usually their names end with "able", It is not a rule but a common naming convention
    In different languages we have different conventions for interfaces.
  -->

- Can I define private methods on interfaces?
  <!--
    Nope, just think through the purpose of interfaces. A private method has nothing to do with a class interfaces's
  -->

- What is the benefit of using interfaces?
  <!--
    By using interfaces you can decouple your business logic from the objects it is using. Eg.: If you have a FileReader Interface you can easily create and replace different readers (CSV, XML, JSON, ...)
  -->

- Sounds cool, how can I implement an interface?
  <!--
    With the implements keyword
  -->

- Can a class implement more interfaces?
  <!--
    Yes, it can, eg.:
      - an AirCraft can be fillable and flyable, it means it can fly and can be filled (with fuel or people)
      - a special ArrayList can be comparable (by length) and iterable
  -->

- What is abstract class?
  <!--
    Abstract classes are classes which are not fully defined yet.
    It has at least one method which needs to be implemented in the extending sub classes
    This is why it cannot be instantiated directly, if would instantiate an abstract class, the program would break when we call a not implemented method.
  -->

- What are abstract methods?
  <!--
    Abstract methods are the methods which need to be implemented in the extending classes. (You need to use the abstract keyword)
  -->

- Can I define properties on an interface?
  <!--
    Yes, you can since Java 8.
  -->

- Should I define properties/methods on interfaces?
  <!--
    You shouldn't it is against the original purpose of interfaces. Default implementations are introduced for refactoring purposes.
  -->

- Are there built-in interfaces in Java?
  <!--
    Of course, fortunately Java is heavily relying on these core OO concepts.
  -->

- How does the Comparable interface embodies this whole concept?
  <!--
    The Comparable interface is for adding comparisson to classes that are not built-in. If you want you class to be comperable it must implement the Comperable<T> interface. The "T" means the type what you want to compare - your class.
    When you implement the Comparable interface, you will need to implement the compareTo method, this is how two instances of your class will be compared.
    For example you can create a special integer ArrayList which can be compared by the average of the values in the array. In this case you have to calculate the average of the values and decide which one is the bigger.
  -->

- Why is it good id we implement the Comparable interface?
  <!--
    For example if you want to use the sort method on an ArrayList which contains your custom class instances.
  -->

### Relation to architecture

- What is an abstraction layer?
  <!--
    An abstraction layer/level is a generalization of a conceptual model or algorithm, away from any specific implementation. These generalizations arise from broad similarities that are best encapsulated by models that express similarities present in various specific implementations. The simplification provided by a good abstraction layer allows for easy reuse by distilling a useful concept or design pattern so that situations where it may be accurately applied can be quickly recognized.
  -->

- When do we use abstracts and interfaces?

  <!--
    Mostly when you design a system/architecture but anytime during development. With abstracts and interfaces we can create a sketch of the system without saying anything specific about the implementation.

    I have these kinds of entites so I can do this and that with them. It is a big picture. With this you earn reusability and all the specific classes will be replacable with new implementations.

    Eg.: I need to create an application which van read an input (file, console, etc) what must be transformed somehow, finally the result must be saved to a file and we need to provide various file format.
    In this case I will need a Reader class which's abstract read() method returns a Transformable interface (it has a transform() method). Finally the result will be saved by a Persistor class which will have an abstract convert() method.
  -->

- What kind of system uses the most interfaces and abstracts?
  <!--
    All the systems are using this kind of constructs however they can be find quite often in
     - Frameworks: Those systems must work in various situations with different entities so they cannot be rigid.
     - Apps that are using plugins: In this case you dont know the concrete implementation but you know what you want to do with the future entites
       - imagine a game (Like GTA) which can be extended special vehicles. The developer team doesnt know what kind of vehicles will be there, but they need to handle them in the  game logic. It can be achived easily with interfaces
  -->

- How does polymorphism relate to abstracts and interfaces?
  <!--
    You can easily achive polymorphism with interfaces and abstracts. You can use them as type in method signatures and property definitions but since they cannot be instantiated you definetely need to implement something else. From this point you can replace these entities and we are done, this is polymorphism.
  -->

- What is the diamond problem?
  <!--
    In some languages you can extend multiple classes and this can cause archtectual questions. Let's say
    We have class "A" with a method "doSomething()"
    If we create class "B" and "C" which extends "A" and override "doSomething()" differently
    Now if you would create a class "D" which would extends "B" and "C" then how can it be decided which "doSomething()" should be executed?
  -->

- What is source code dependency?
  <!--
    Source code dependency is when you import a package. It means that your code is depending on that class and it might change if the dependent class changes.
  -->

- How do interfaces relate to (SOLI**D**)?
  <!--
    "D" is the dependency inversion, this is the way how you can prevent source code dependency.
    Think through the game example above. The interface is part of the game logic, it is developed by the team not the plugin developer. So the team doesnt need to change each time a new plugin has been released. Aka you are not depending on implementations/sub systems.
  -->

## Workshops

### Using an interface

```java
public interface Moveable {
  void move(int meter);
}

public class Car implements Moveable {
  public int distanceTaken;

  public Car() {
    distanceTaken = 0;
  }

  @Override
  public void move(int meter) {
    distanceTaken += meter;
  }
}

public static void main(String... args) {
  Car c = new Car();
  c.move(100);
  System.out.println(c.distanceTaken);

  Movable something = new Car();
  something.move(200);
  System.out.println(((Car)something).distanceTaken);
}
```

- [Cloneable](exercises/01-cloneable/java.md)
- [Comparable](exercises/02-comparable/java.md)
- [CharSequence](exercises/03-charsequence/README.md)

### Abstract classes

```java
public abstract class Incomplete {
  String field;

  protected abstract void incompletedMethod(int n);

  public void completedMethod(String s) {
    this.field = s;
  }
}

public class Complete extends Incomplete {
  int anotherField;

  @Override
  protected void incompleteMethod(int n) {
    this.anotherField = n;
    System.out.println(field);
  }
}
```

- [Instruments to Stringed Instruments](exercises/04-instruments/java.md)
- [Animals in the Zoo 💪](exercises/05-zoo/java.md)

### Interfaces

- [Flyable](exercises/06-flyable/java.md)
- [Printable](exercises/07-printable/java.md)
- [Reservations 💪](exercises/08-reservations/java.md)

## Individual Workshop Review

As always neatness counts in coding.

Please be sure you're well acquainted with the guidelines on coding:
[GreenFox Academy's Java Styleguide](https://github.com/green-fox-academy/teaching-materials/blob/master/styleguide/java.md)
