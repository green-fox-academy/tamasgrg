package task12_ShoppingList;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class ShoppingList {
  public static void main(String[] args) {
//    We are going to represent a shopping list in a list containing strings.
//
//    Create a list with the following items.
//    Eggs, milk, fish, apples, bread and chicken
    List<String> list = new ArrayList<>(Arrays.asList("Eggs", "milk", "fish", "apples", "bread", "chicken"));

//    Create an application which solves the following problems.
//    Do we have milk on the list?
    System.out.println(list.contains("milk"));
//    Do we have bananas on the list?
    System.out.println(list.contains("bananas"));
  }
}
