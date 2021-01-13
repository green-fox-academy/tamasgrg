package task12_SumAllElements;

// - Create an array variable named `numbers`
//   with the following content: `[3, 4, 5, 6, 7]`
// - Print the sum of the elements of `numbers`

import java.util.Arrays;

public class SumAllElements {
  public static void main(String[] args) {
    int[] numbers = {3, 4, 5, 6, 7};
    System.out.println(Arrays.stream(numbers).reduce((sum, num) -> sum + num).getAsInt());
  }
}
