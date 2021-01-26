# Exercise 1

Write a Stream Expression to get the even numbers from the following list:

```java
List<Integer> numbers = Arrays.asList(1, 3, -2, -4, -7, -3, -8, 12, 19, 6, 9, 10, 14);
```

## Exercise 2

Write a Stream Expression to get the squared value of the positive numbers from
the following list:

```java
List<Integer> numbers = Arrays.asList(1, 3, -2, -4, -7, -3, -8, 12, 19, 6, 9, 10, 14);
```

## Exercise 3

Write a Stream Expression to find which number squared value is more then 20
from the following list:

```java
List<Integer> numbers = Arrays.asList(3, 9, 2, 8, 6, 5);
```

## Exercise 4

Write a Stream Expression to get the average value of the odd numbers from the
following list:

```java
List<Integer> numbers = Arrays.asList(1, 3, -2, -4, -7, -3, -8, 12, 19, 6, 9, 10, 14);
```

## Exercise 5

Write a Stream Expression to get the sum of the odd numbers in the following
list:

```java
List<Integer> numbers = Arrays.asList(5, 9, 1, 2, 3, 7, 5, 6, 7, 3, 7, 6, 8, 5, 4, 9, 6, 2);
```

## Exercise 6

Write a Stream Expression to find the uppercase characters in a string!

## Exercise 7

Write a Stream Expression to find the strings which starts with a given
letter(as parameter), in the following list:

```java
List<String> cities = Arrays.asList("ROME", "LONDON", "NAIROBI", "CALIFORNIA", "ZURICH", "NEW DELHI", "AMSTERDAM", "ABU DHABI", "PARIS");
```

## Exercise 8

Write a Stream Expression to concatenate a Character list to a string!

## Exercise 9

Write a Stream Expression to find the frequency of characters in a given string!

## Exercise 10

Create a Fox class with 3 properties:`name`, `color` and `age` Fill a list with
at least 5 foxes and:

- Write a Stream Expression to find the foxes with green color!
- Write a Stream Expression to find the foxes with green color, and age less
  then 5 years!
- Write a Stream Expression to find the frequency of foxes by color!

## Exercise 11 💪

Find a [random Wikipedia article](http://wikiroulette.co/) and copy the contents
to a txt file.

Create a Stream expression which reads all text from this file, and prints the
100 most common words in descending order. Keep in mind that the text contains
punctuation characters which should be ignored. The result should be something
like this:

```text
the: 131
of: 74
and: 48
to: 45
a: 43
in: 43
was: 30
as: 21
German: 18
for: 16
his: 15
by: 13
he: 11
that: 11
...
```

## Exercise 12 💪💪

The [swcharacters.csv](../assets/swcharacters.csv) file contains the list of
characters appeared in the Star Wars universe.

> "BBY" stands for Before the Battle of Yavin, it's the "year zero" in the
> Galactic Standard Calendar. For the age calculation let's assume that it's
> "year zero" and every character lives for the sake of simplicity.

Create Stream expressions to perform the following exercises:

- Print the name of the heaviest character (if the mass is unknown, ignore that
  character)
- Print the average height of the male characters
- Print the average height of the female characters
- 💪 Get the age distribution of the characters by gender (where the gender can
  be "male", "female" and "other")
  - The age groups are: "below 21", "between 21 and 40", "above 40" and
    "unknown"
  - The result should be a `Map<String, Map<String, Integer>>`
