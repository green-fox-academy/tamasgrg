package task10_PersonalFinance;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class PersonalFinance {
  public static void main(String[] args) {
//    We are going to represent our expenses in a list containing integers.
//
//    Create a list with the following items.
//    500, 1000, 1250, 175, 800 and 120
    List<Integer> list = new ArrayList<>(Arrays.asList(500, 1000, 1250, 175, 800, 120));
//    Create an application which solves the following problems.
//    How much did we spend?
    System.out.println(list.stream().reduce((sum, num) -> sum + num).get());
//    Which was our greatest expense?
    System.out.println(list
        .stream()
        .reduce((max, num) -> {
          return max > num ? max : num;
        })
        .get()
    );

//    Which was our cheapest spending?
    System.out.println(list
        .stream()
        .reduce((min, num) -> {
          return min < num ? min : num;
        })
        .get()
    );

//    What was the average amount of our spendings?
    System.out.println(list.stream().reduce((sum, num) -> sum + num).get() / list.size());
  }
}
