# Arrays

## Materials & Resources

| Material                                                              |  Time |
| :-------------------------------------------------------------------- | ----: |
| [Introduction to Arrays](https://www.youtube.com/watch?v=L06uGnF4IpY) |  7:25 |
| [Arrays (Bana.09)](https://www.youtube.com/watch?v=eNPX2pTiaHI)       | 18:08 |

### Optional

| Material                                                                                               |    Time |
| :----------------------------------------------------------------------------------------------------- | ------: |
| [Arrays (official Oracle docs)](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/arrays.html) | reading |
| [Arrays in Java](https://www.baeldung.com/java-arrays-guide)                                           | reading |

## Material Review

- What is an array? What are the characteristics of them?
- How do you *declare* an Array?
- How do you set the initial values of an Array?
- What is the index of the first element in the array?
- How do you get the total number of elements of an Array?
- How do you iterate through the elements of an array? (i.e. go through each
  element one by one)
- How do you sort the elements of an Array?
- What is a multi dimensional array?

## Workshop

```java
public class Arrays {
  public static void main(String[] args) {
    int[] myList = {1, 2, 3, 6};

    // Print the second element of the array
    System.out.println("The second element is " + myList[1]);

    // Print all the array elements
    for (int i = 0; i < myList.length; i++) {
      System.out.println(myList[i] + " ");
    }
  }
}
```

### Exercises

- [Third](exercises/01-third/Third.java)
- [Compare Length](exercises/02-compare-length/CompareLength.java)
- [Sum elements](exercises/03-sum-elements/SumElements.java)
- [Change element](exercises/04-change-element/ChangeElement.java)
- [Increment element](exercises/05-increment-element/IncrementElement.java)
- [Print elements](exercises/06-print-all/PrintAll.java)
- [Matrix](exercises/07-diagonal-matrix/DiagonalMatrix.java)
- [Double items](exercises/08-double-items/DoubleItems.java)
- [Colors](exercises/09-colors/Colors.java)
- [Append a](exercises/10-append-a/AppendA.java)
- [Swap elements](exercises/11-swap-elements/SwapElements.java)
- [Sum all elements](exercises/12-sum-all/SumAll.java)
- [Reverse list](exercises/13-reverse/Reverse.java)
