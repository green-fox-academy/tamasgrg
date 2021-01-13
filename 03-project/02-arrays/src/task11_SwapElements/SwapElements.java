package task11_SwapElements;

// - Create an array variable named `orders`
//   with the following content: `["first", "second", "third"]`
// - Swap the first and the third element of `orders`

public class SwapElements {
  public static void main(String[] args) {
    String[] orders = {"first", "second", "third"};

    String temp = orders[0];
    orders[0] = orders[2];
    orders[2] = temp;

    for (String s : orders) System.out.println(s);
  }
}
