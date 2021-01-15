# Object Oriented Programming

## Materials & Resources

### Materials

- Before starting the materials
- Do this little exercise: [Doable homework](homework/README.md)

| Material                                                                  |  Time |
| :------------------------------------------------------------------------ | ----: |
| [Class and Object](https://www.youtube.com/watch?v=eKC04ztp09o)           |  1:37 |
| [Class and Object detailed](https://www.youtube.com/watch?v=0NPR8GFHNmE)  | 13:43 |
| [Classes, constructor](https://www.youtube.com/watch?v=cwtBfVFuiBo)       | 11:18 |
| [Learn Constructors in Java](https://www.youtube.com/watch?v=G1Iln3PSrUg) | 12:25 |
| [This](https://www.youtube.com/watch?v=hUZ4jQmgwi4)                       |  4:11 |
| [New](https://www.youtube.com/watch?v=VyPFa1Slh7A#t=50)                   | 12:11 |
| [Static](https://www.youtube.com/watch?v=n4axao9LWWE)                     |  7:44 |

### Optional

| Material                                                                   |  Time |
| :------------------------------------------------------------------------- | ----: |
| [Classes and Fields](https://www.youtube.com/watch?v=OHw2t8BaIUg)          | 11:44 |
| [Classes and Methods](https://www.youtube.com/watch?v=-eoNHtILOs4)         | 11:05 |
| [Constructor and new keyword](https://www.youtube.com/watch?v=oSiN1J_G01Q) | 10:18 |

## Material Review

- What is OOP?
  <!--
    OOP is a paradigm that is concerned mainly with the way that code is
    organized. It gives us classes, and other tools to group similar things
    together.
  -->
- Do we have other paradigms?
  <!--
    Yes, we have different paradigms. Moreover languages can follow more
    paradigms.
    eg.: functional, procedural etc..
  -->
- Is OOP the best?
  <!--
    No, there is no best paradigm. It depends on the given problem, environment
    and sometimes taste.
    comparison: Stateful - Stateless
  -->
- What is a class?
  <!--
    It is a blueprint. It tells what makes something a "thing".
    The Bird is a class,
      - it tells us that each bird has wings, feet but they don't have any teeth
        or battery
      - they can fly, eat but they can't write or drive a car.
    You can use that blueprint to create different instances of that class.
    Eg.: A white eagle or a black falcon, etc...
    They will behave the same but their properties will differ.

    Think them as real blueprints, you can build white, red any colored house
    from the same blueprint, you can change even the windows, but the sizes will
    be the same and you can enter the building the same way.

    Since it is a concept, a thing it has always singular name!!!
  -->
- What is the constructor?
  <!--
    This will be called when you create a new instance of the class by using the
    new keyword.
    All the classes have a default empty constructor w/o any parameters. If you
    want to do something during the instantiation you have to define your own
    constructor.
    You can define more constructors so your class can be instantiated in
    different ways.
    Usually we assign value to the instance variables, we initialize the
    instance in the constructor. We shouldn't have any side effect in the
    constructor.
  -->
- What does the this keyword mean?
  <!--
    It references to the instance, you can use it to access your props and
    methods
  -->
- What is the difference between classes and instances?
  <!--
    You are the instance, Person is the class. Person is a concept, You are one
    concrete example of that concept.
  -->
- What are fields, props?
  <!--
    These are the properties what each instance must own but they have different
    values in each instance.
    Eg.: Each Person has
      - hair color
      - length
      - weight
      - eye color

    These properties hold the current state of the instance.
  -->
- What are the methods?
  <!--
    These are those action what can be made on your instance or can be performed
    by the instance.
    For example a Person can
      - eat(Food)
      - drive(Car)
      - hit(Person)
      - sleep()

    These actions will change the instance's current state or will interact with
    other objects/instances.
  -->
- What is `private` and `public`?
  <!--
    If you set a property or method to private, it won't exist for the outer
    world. It is accessible only within the class.
     - You need getters and setters to modify their values
     - Public means there is no restriction on the property, anybody can access it
  -->
- What is encapsulation?
  <!--
    In order to keep the internal consistency you have to hide your internal
    state.
      - A Car, if it is driven, the fuelLevel is decreasing and the runKms is
      increasing. If the runKms would be public you would be able to change it
      without lowering the fuelLevel.
      - If you have a bank account you need a transaction to change the balance.
        If the balance would be public it could be editable without any history.

    Sometimes you want to hide a complex system from the user, because he
    doesn't want to deal with implementation details.
     - You don't now how an ArrayList stores its values. You just call the
       functions on it.
     - HashMap
  -->
- How does the SRP come up in OOP?
  <!--
    SRP: It means one thing must do only one thing. This is not the right
    definition but it is a good start. In OOP each class must deal with only one
    topic/thing. It should not write files and calculate complex logic.
    Indicator: too many properties, the properties are used in different methods.
  -->
- What is a class variable?
  <!--
    It is defined on the class, not on the instances. You remember only one
    class exists, so in his case we will have only one variable.
    Each instance will have the same value so if one changes it all the other
    instances will have the new value too.
    Eg. A counter which counts how many instances have been created from the
    class.
  -->
- What does the static keyword do?
  <!--
    This is how you can create class variables. You can use this keyword for
    methods as well.
  -->
- How can I use classes from other files?
  <!--
    By importing them to your source file.
  -->

## Workshop

**Create a project for the day and create a package for the task (with the name
of the tasks) and put all java files into that package that belongs to that
task.**

### Data Structure

```java
public class Bicycle {
  int cadence;
  int gear;
  int speed;
}
```

```java
public class FamilyMember {
  String name;
  int age;
  String surname;
}
```

- [Post-it](exercises/01-post-it/java.md)
- [BlogPost](exercises/02-blog-post/README.md)

### Encapsulation and Constructor

```java
public class Human {
  String name;
  int age;
  int iq;

  public Human() {
    this(null, 0, 0);
  }

  public Human(String name, int age, int iq) {
    this.name = name;
    this.age = age;
    this.iq = iq;
  }

  public boolean isSmart() {
    return iq > 100;
  }

  public boolean isNameless() {
    return this.name == null || this.name.isEmpty();
  }

  public void beSmarter() {
    this.iq += 20;
  }

  public static void main(String[] args) {
    Human human = new Human();
    Human human2 = new Human("John", 18, 110);

    human.name = "Hector";
    human.age = 1;

    if (human.isSmart()) {
      System.out.println(human.name + " is smart, with iq: " + human.iq);
    }
  }
}
```

- [Animal](exercises/03-animal/README.md)
- [Sharpie](exercises/04-sharpie/java.md)
- [Counter](exercises/05-counter/java.md), [Test](exercises/tests/CounterTest.java)

### Use Class

```java
public class Usable {
  String status;
  public Usable() {
    status = "I'm not used at all";
  }

  public void use() {
    status = "Now, I was used at least once."
  }
}

public class Main {
  public static void main(String[] args) {
    Usable firstUsable = new Usable();
    firstUsable.use();
  }
}
```

- [Pokemon](exercises/06-pokemon/Pokemon.java), [Main](exercises/pokemon/Main.java)
- [Fleet of Things](exercises/07-fleet-of-things/FleetOfThings.java),
  [Fleet](exercises/07-fleet-of-things/Fleet.java), [Thing](exercises/07-fleet-of-things/Thing.java)
- [Dice set](exercises/08-dice-set/DiceSet.java)
- [Dominoes](exercises/09-dominoes/Dominoes.java), [Domino](exercises/09-dominoes/Domino.java) 💪

### Complex Architectures

- [Teachers and Students](exercises/10-teachers-and-students/README.md)
- [Petrol Station](exercises/11-petrol-station/java.md)

### Classes as Fields

```java
public class Page {
  String content;

  public Page() {
    this.content = "";
  }

  public Page(String content) {
    this.content = content;
  }

  public String getContent() {
    return content;
  }
}

public class Book {
  List<Page> pages;

  public Book() {
    this.pages = new ArrayList<>();
  }

  public void add(Page page) {
    pages.add(page);
  }

  public int countBlankPages() {
    int counter = 0;
    for (Page page : this.pages) {
      if (page.getContent().isEmpty()) {
        counter++;
      }
    }
    return counter;
  }
}
```

- [Sharpie Set](exercises/12-sharpie-set/java.md)
- [Farm](exercises/13-farm/README.md)
- [Blog](exercises/14-blog/README.md)

### All together

- [Pirates](exercises/15-pirates/java.md) *exam*
- Redo the 5 trees homework (with classes)
