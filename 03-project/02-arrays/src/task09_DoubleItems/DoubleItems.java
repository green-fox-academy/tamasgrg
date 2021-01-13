package task09_DoubleItems;

// - Create an array variable named `numberList`
//   with the following content: `[3, 4, 5, 6, 7]`
// - Double all the values in the array

public class DoubleItems {
  public static void main(String[] args) {
    int[] numberList = {3, 4, 5, 6, 7};
    for (int i : numberList) System.out.println(i *= 2);
  }
}
