# Expressions and Control Flow

Get into *real* programming, installing a development environment and then
running our first programs.

## Materials

| Material                                                                                          |            Time |
|:--------------------------------------------------------------------------------------------------|----------------:|
| [Historical background leading to Java (Guru-01)](https://www.youtube.com/watch?v=2Xa3Y4xz8_s)      |            6:01 |
| [Installing IntelliJ IDEA for java on Windows 10](https://www.youtube.com/watch?v=E2okEJIbUYs)    |            9:02 |
| [Basic Syntax](https://www.youtube.com/watch?v=SSEpAsKqRqA)                                       |           10:35 |
| [Mathematical Operations & Primitive Variable Types](https://www.youtube.com/watch?v=XwvrFugFmKQ) |           11:42 |
| [Strings & Scanner Input](https://www.youtube.com/watch?v=aNm8DK_1ApU)                            |           14:43 |
| [Boolean Operators & IF Statement](https://www.youtube.com/watch?v=6O_lwNnWFR0)                   |           10:29 |
| [Else/Else If Statements & AND/OR Operators](https://www.youtube.com/watch?v=3J4jCSXA1Pw)         |           14:22 |
| [While, Do While & For Loops](https://www.youtube.com/watch?v=6djggrlkHY8)                        | only until 8:35 |

### Environment

#### Java

- [Download Java SE Development Kit 14](https://www.oracle.com/java/technologies/javase-jdk14-downloads.html)
- Download integrated development environment (IDE) [Intellij IDEA](https://www.jetbrains.com/idea/download/)
  - **Choose Community** edition (we're going to switch to Ultimate in
    orientation phase - you will get a license from your mentor)
- Activate IntelliJ IDEA following [this activation guide](assets/intellij-activation.md)
- [Set the environment variables in Windows](http://www.codejava.net/java-core/how-to-set-environment-variables-for-java-using-command-line)
- [How to speed up IntelliJ IDE in Windows](assets/how-to-speed-up-intellij.md)

## Material Review

- What is a programming language?
- What type of programming language is Java?
  <!-- an imperative statically typed programming language -->
- What do we need to be able to write a program?
  <!-- a text editor, IntelliJ IDEA -->
- What is a statement?
  <!-- syntactic unit that expresses some action to be carried out -->
- What is a variable?
- What is variable declaration?
- What is variable assignment?
- What kind of variable types do you know?
  <!-- byte, short, int, long, float, double, boolean, char, String -->
- What is an operator?
- What type of operators do you know?
  <!--
  arithmetic operators:
  additive (+),
  subtraction (-),
  multiplication (*),
  division (/),
  remainder (%)
  
  unary operators:
  increment (++),
  decrement (--),
  logical complement (!)
  
  equality and relational operators:
  equal to (==),
  not equal to (!=),
  greater than (>),
  greater than or equal to (>=),
  less than (<),
  less than or equal to (<=)
  
  conditional operators:
  conditional-AND (&&),
  conditional-OR (||)
  -->
- What is the *Hello World!* application?
- What is string concatenation?
- What is a *block*?
- What is an *if* statement?
- What is a *for-loop* statement?
- What is a *while-loop* statement?
- What is a *do-loop* statement?
- What is a *switch* statement?
- How can you get input from the user via command line?

## Bookmark

We recommend you to bookmark this [online tool](http://pythontutor.com/)

It helps you to visualize code execution.

## Workshop

> **Note**: Create a project for the day and create a new java file for each
> task with a `main()` method. **Insert each task description into your java
> file as a comment!** This comment will help you and your mentor see what
> needs to be done for the given task without visiting GitHub.

💪: If you see this emoji, it means that you can skip the exercise if you are
in lack of time. You can practice with these exercises later to deepen your
knowledge (or to prepare for the exam).

### Printing to the terminal window

#### Hello World

```java
public class HelloWorld {
  public static void main(String[] args) {
    // Prints "Hello, World!" to the terminal window
    System.out.println("Hello, World!");
  }
}
```

### Comments

```java
// single line comment

/*
 multi line
 comment block
*/
```

#### Exercises

- [HelloMe](hello-me/hello-me.java.md)
- [HumptyDumpty](humpty-dumpty/humpty-dumpty.java.md)
- [HelloOthers](hello-others/hello-others.java.md)

### Types

#### Print values with different types

```java
public class PrintValues {
  public static void main(String[] args) {
    // Prints a string to the terminal window
    System.out.println("Hello, World!");

    // Prints an integer to the terminal window
    System.out.println(42);

    // Prints a floating point number to the terminal window
    System.out.println(3.141592);
  }
}
```

#### Integers

```java
public class Integers {
  public static void main(String[] args) {
    // Positive, negative and zero (not null)
    System.out.println(42);  // Prints 42
    System.out.println(-1);  // Prints -1
    System.out.println(0);   // Prints 0

    // A simple integer is represented in 4 bytes (32bit)
    // Maximum value:  2 147 483 647
    System.out.println(2147483647);
    // Minimum value: -2 147 483 648
    System.out.println(-2147483648);

    System.out.println(2147483648); // Compilation error
  }
}
```

#### Floats

```java
public class Floats {
  public static void main(String[] args) {
    // Positive, negative and zero (not null)
    System.out.println(3.1415);   // Prints 3.1415
    System.out.println(-1.5);     // Prints -1.5
    System.out.println(0.0);      // Prints 0.0

    // Leading and closing zero is not mandatory
    System.out.println(.5);      // Prints 0.5
    System.out.println(5.);      // Prints 5.0
  }
}
```

#### Number Operations

```java
public class NumberOperations {
  public static void main(String[] args) {
    // Arithmetic operations
    System.out.println(1 + 1);    // Prints 2
    System.out.println(5 - 2);    // Prints 3
    System.out.println(3 * 4);    // Prints 12
    System.out.println(6 / 2);    // Prints 3
    System.out.println(5 / 2);    // Prints 2
    System.out.println(5. / 2);   // Prints 2.5
    System.out.println(5 / 2.);   // Prints 2.5
    System.out.println(5. / 2.);  // Prints 2.5
    System.out.println(5 % 2);    // Prints 1
  }
}
```

#### Booleans

```java
public class Booleans {
  public static void main(String[] args) {
    // true, false
    System.out.println(true);    // Prints true
    System.out.println(false);   // Prints false

    // Boolean Operators
    // Negation
    System.out.println(!true);   // Prints false
    System.out.println(!false);  // Prints true

    // And
    System.out.println(true && true);    // Prints true
    System.out.println(true && false);   // Prints false
    System.out.println(false && true);   // Prints false
    System.out.println(false && false);  // Prints false

    // Or
    System.out.println(true || true);    // Prints true
    System.out.println(true || false);   // Prints true
    System.out.println(false || true);   // Prints true
    System.out.println(false || false);  // Prints false
  }
}
```

#### Strings

```java
public class Strings {
  public static void main(String[] args) {
    // String and special characters
    System.out.println("apple");   // Prints apple
    System.out.println("don't");   // Prints don't
    System.out.println("\"Everything you can imagine is real.\" - Picasso"); // Prints "Everything you can imagine is real." - Picasso

    // String Operators
    // Concatenation
    // Concat string with string
    System.out.println("tooth" + "brush"); // Prints toothbrush

    // Concat string with number
    System.out.println("My favorite number is: " + 8); // Prints My favorite number is: 8
  }
}
```

#### Exercises

- [IntroduceYourself](introduce-yourself/introduce-yourself.java.md)
- [TwoNumbers](two-numbers/two-numbers.java.md)
- [CodingHours](coding-hours/coding-hours.java.md)

### Variables

#### Creating different variables for each type

```java
public class Variables {
  public static void main(String[] args) {
    // String
    String welcome = "Hello, World";
    System.out.println(welcome);

    // Boolean
    boolean isAwesome = true;
    System.out.println(isAwesome);

    // Whole number
    // integer (32 bit; min: -2 147 483 648; max: 2 147 483 647)
    int theMeaningOfLifeAndTheUniverseAndEverything = 42;
    System.out.println(theMeaningOfLifeAndTheUniverseAndEverything);

    // Floating point number
    // Double (64 bit, double precision IEEE 754)
    double pi = 3.141592;
    System.out.println(pi);

    // Other mentioned types
    byte b = 2;                // Byte (8 bit; min:-128; max: +127)
    short s = 567;             // Short (16 bit; min: -32768 ; max: +32 767)
    long l = 30000000000000L;  // Long (64 bit; min: -9 223 372 036 854 775 808 ;max: 9 223 372 036 854 775 807)
    float f = 1.3f;
    float f2 = 45f;            // Float (32 bit single precision IEEE 754)

    // Declaring a variable
    int number;

    // Assigning a value to a variable, (define its value)
    number = 12;

    // Mutating a variable, (redefine its value)
    number = 23;
  }
}
```

#### Arithmetic Assignment Operators

```java
public class Variables {
  public static void main(String[] args) {
    int a = 12;
    a += 4;
    System.out.println(a);     // Prints 16

    int b = 12;
    b -= 4;
    System.out.println(b);     // Prints 8

    int c = 12;
    System.out.println(c++);   // Prints 12
    System.out.println(c);     // Prints 13

    int d = 12;
    System.out.println(++d);   // Prints 13
    System.out.println(d);     // Prints 13

    int e = 12;
    System.out.println(e--);   // Prints 12
    System.out.println(e);     // Prints 11

    int f = 12;
    System.out.println(--f);   // Prints 11
    System.out.println(f);     // Prints 11

    int g = 12;
    g *= 3;
    System.out.println(g);     // Prints 36

    int h = 12;
    h /= 3;
    System.out.println(h);     // Prints 4

    int i = 12;
    i %= 7;
    System.out.println(i);     // Prints 5
  }
}
```

#### Exercises

- [FavoriteNumber](favorite-number/favorite-number.java.md)
- [Swap](swap/swap.java.md)
- [Bmi 💪](bmi/bmi.java.md)
- [DefineBasicInfo](define-basic-info/define-basic-info.java.md)
- [VariableMutation](variable-mutation/variable-mutation.java.md)
- [Cuboid 💪](cuboid/cuboid.java.md)
- [SecondsInADay](seconds-in-a-day/seconds-in-a-day.java.md)

### User input (scanner)

```java
// Loads the scanner to the file
import java.util.Scanner;

public class UserInput {
  public static void main(String[] args) {
    // Creates a scanner
    Scanner scanner = new Scanner(System.in);

    // The program stops and waits for user input and to press enter
    String userInput1 = scanner.nextLine();

    // It prints the whole line that was given by the user
    System.out.println(userInput1);

    // The program stops and waits for user input that is an integer and to press enter
    int userInput2 = scanner.nextInt();

    // It prints the integer
    System.out.println(userInput2);
  }
}
```

#### Exercises

- [HelloUser](hello-user/hello-user.java.md)
- [MileToKmConverter](mile-to-km-converter/mile-to-km-converter.java.md)
- [AnimalsAndLegs 💪](animals-and-legs/animals-and-legs.java.md)
- [AverageOfInput 💪](average-of-input/average-of-input.java.md)

### Conditionals

```java
public class Conditionals {
  public static void main(String[] args) {
    int a = 13;

    if (a == 13) {
      System.out.println("Yaaay! The value of the \"a\" variable is 13"); // This block will run
    }

    if (a == 8) {
      System.out.println("Yaaay! The value of the \"a\" variable is 8"); // This block will NOT run
    }


    int b = 20;

    if (b < 10) {
      System.out.println("Yaaay! The value of the \"b\" variable is lower than 10"); // This block will NOT run
    } else {
      System.out.println("Yaaay! The value of the \"b\" variable is higher than 10"); // This block will run
    }


    int c = 15;

    if (c < 10) {
      System.out.println("Yaaay! The value of the \"c\" variable is lower than 10"); // This block will NOT run
    } else if (c < 20) {
      System.out.println("Yaaay! The value of the \"c\" variable is higher than 10"); // This block will run
    } else {
      System.out.println("Yaaay! The value of the \"c\" variable is higher than 10"); // This block will NOT run
    }


    boolean thirsty = true;
    boolean hungry = false;

    if (thirsty && hungry) {
      System.out.println("Lunch time!");
    } else if (thirsty || hungry) {
      System.out.println("Snack time!");
    } else {
      System.out.println("No food for you.");
    }
  }
}
```

#### Exercises

- [OddEven](odd-even/odd-even.java.md)
- [OneTwoALot](one-two-a-lot/one-two-a-lot.java.md)
- [PrintBigger 💪](print-bigger/print-bigger.java.md)
- [PartyIndicator](party-indicator/party-indicator.java.md)
- [ConditionalVariableMutation 💪](conditional-variable-mutation/conditional-variable-mutation.java.md)

### Loops

```java
public class Conditionals {
  public static void main(String[] args) {
    int a = 0;
    while (a < 10) {
      System.out.println(a); // Prints the numbers from 0 to 9
      a += 1;
    }

    for (int i = 0; i < 100; i++) {
      System.out.println(i); // Prints the numbers from 0 to 99
    }
  }
}
```

#### Exercises

- [IWontCheatOnTheExams](i-wont-cheat-on-the-exams/i-wont-cheat-on-the-exams.java.md)
- [PrintEven](print-even/print-even.java.md)
- [MultiplicationTable](multiplication-table/multiplication-table.java.md)
- [CountFromTo](count-from-to/count-from-to.java.md)
- [FizzBuzz](fizz-buzz/fizz-buzz.java.md)
- [DrawTriangle](draw-triangle/draw-triangle.java.md)
- [DrawPyramid 💪](draw-pyramid/draw-pyramid.java.md)
- [DrawDiamond 💪](draw-diamond/draw-diamond.java.md)
- [DrawSquare 💪](draw-square/draw-square.java.md)
- [DrawDiagonal](draw-diagonal/draw-diagonal.java.md)
- [GuessTheNumber](guess-the-number/guess-the-number.java.md)
- [ParametricAverage 💪](parametric-average/parametric-average.java.md)
- [DrawChessTable](draw-chess-table/draw-chess-table.java.md)

### Hard Ones

Be aware that these tasks potentially use concepts that you have to research!

- [Find the substring](substr/substr.java.md)

## Individual Workshop Review

Please follow the styleguide: [Our Java styleguide](../../styleguide/java.md)

- Is the directory structure and the name of the files correct?
- Are the includes/imports placed on the top of the files?
- Is the indentation good in each file?
- Is there unnecessary code?
- Can you find unnecessary code in comments?
- Is there unnecessary code duplication?
- Are there unnecessary empty blocks?
- Can you spot unused variables?
- Is the commit message meaningful?
- Are the names of things following the styleguide?
  - Classes: UpperCamelCase
  - variables: lowerCamelCase
- Are all of the brackets in the perfect place?
- Whitespaces: where they should be, where shouldn't?