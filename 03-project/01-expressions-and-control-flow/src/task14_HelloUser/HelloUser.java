package task14_HelloUser;

import java.util.Scanner;

public class HelloUser {
  public static void main(String[] args) {
    // Modify this program to greet user instead of the World!
    // The program should ask for the name of the user
    Scanner s = new Scanner(System.in);
    String userName = s.nextLine();
    System.out.println("Hello, " + userName +  " !");
  }
}
