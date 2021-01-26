# Java Stream API

## Purpose

The purpose of this workshop is to learn a few modern Java language features
which enables you to write shorter and more readable code.

## Materials

| Material                                                                         |            Time |
| :------------------------------------------------------------------------------- | --------------: |
| [Lambda Basics](https://www.youtube.com/watch?v=nUIAvs4OEkM)                     |            7:31 |
| [Lambda Expression Examples](https://www.youtube.com/watch?v=BK5iSG5yMT0)        |            9:50 |
| [Introduction to Streams](https://www.youtube.com/watch?v=0bHCxjkku0s)           |           11:25 |
| [Stream Detailed](https://www.youtube.com/watch?v=suSdjhS03qk)                   |            6:16 |
| [Stream Methods](https://www.tutorialspoint.com/java8/java8_streams.htm)         | 10:00 (reading) |
| [Examples](http://winterbe.com/posts/2014/07/31/java8-stream-tutorial-examples/) | 20:00 (reading) |
| [Predicate](https://www.youtube.com/watch?v=O-aM_DA_FCU)                         |            8:57 |
| [Grouping](https://www.youtube.com/watch?v=CaERsnos5p4)                          |           14:44 |

## Optional

| Material                                                                            |            Time |
| :---------------------------------------------------------------------------------- | --------------: |
| [Programming with Streams in Java 8](https://www.youtube.com/watch?v=rVfRDLIw_Zw)   |           61:39 |
| [Deeper](http://www.baeldung.com/java-8-streams)                                    | 14:00 (reading) |
| [Predicate and Predicate methods](https://www.journaldev.com/17072/java-predicate)  | 10:00 (reading) |
| [Cheat sheet](http://files.zeroturnaround.com/pdf/zt_java8_streams_cheat_sheet.pdf) |               - |

## Material Review

- What is an Optional type?
  <!--
    A container object which may or may not contain a non-null value.
  -->
- How can you check if the value is present?
  <!--
    If a value is present, isPresent() will return true.
  -->
- How can you get the value?
  <!--
    get() will return the value.
  -->
- What if there is no value present and you use the get() method?
  <!--
    It will return null value.
  -->
- What is a lambda expression?
  <!--
    A way to create a function without name.
  -->
- What is a stream?
  <!--
    A sequence of elements from a source that supports aggregate operations.
  -->
- What is an intermediate operation?
  <!--
    A stream operation which returns a stream like: map, filter, limit.
    This means you can keep chaining them until a terminal operation like:
    first map to something then filter out then limit, etc...
  -->
- What is a terminal operation?
  <!--
    A stream operation which returns a list, an integer or any non-stream type,
    like: forEach, collect.
    It ends your chaining, probably this is the last thing you want to do with a
    stream.
  -->

## Workshop

The example below shows how to select the elements of a list which are larger
than 3.

```java
public static void main(String[] args) {

  List<Integer> myList = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

  // solving it with good old for loop
  for (int i = 0; i < myList.size(); i++) {
    if (myList.get(i) > 3) {
      System.out.println(myList.get(i));
    }
  }

  // solving it with magic
  myList.stream().filter(x -> x > 3).forEach(System.out::println);
}
```

### Practice Exercises

- [Exercises](./exercises/java.md)
