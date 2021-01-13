package task13_ReverseList;

// - Create an array variable named `numbers`
//   with the following content: `[3, 4, 5, 6, 7]`
// - Reverse the order of the elements of `numbers`
// - Print the elements of the reversed `numbers`

public class ReverseList {
  public static void main(String[] args) {
    int[] numbers = {3, 4, 5, 6, 7};
    int[] temp = new int[numbers.length];
    for (int i = 0; i < numbers.length; i++) {
      temp[i] = numbers[numbers.length - i - 1];
    }
    numbers = temp;
    for (int i : numbers) System.out.println(i);
  }
}
