package task06_ListIntroduction1;

//We are going to play with lists. Feel free to use the built-in methods where possible.

import java.util.ArrayList;
import java.util.List;

public class ListIntroduction1 {

  public static void main(String[] args) {

//    Create an empty list which will contain names (strings)
    List<String> names = new ArrayList<>();
//    Print out the number of elements in the list
    System.out.println(names.size());
//    Add William to the list
    names.add("William");
//    Print out whether the list is empty or not
    System.out.println(names.isEmpty());
//    Add John to the list
//    Add Amanda to the list
    names.add("John");
    names.add("Amanda");
//    Print out the number of elements in the list
    System.out.println(names.size());
//    Print out the 3rd element
    System.out.println(names.get(2));
//    Iterate through the list and print out each name
//        William
//        John
//        Amanda
    for (String n : names) System.out.println(n);
//    Iterate through the list and print
//    1. William
//    2. John
//    3. Amanda
    for (int i = 0; i < names.size(); i++) {
      System.out.println(i + 1 + ". " + names.get(i));
    }
//    Remove the 2nd element
    names.remove(1);
//    Iterate through the list in a reversed order and print out each name
//        Amanda
//        William
    for (int i = names.size() - 1; i >= 0; i--) {
      System.out.println(names.get(i));
    }
//    Remove all elements
    names.remove(1);
    names.remove(0);
    System.out.println(names);
  }
}
