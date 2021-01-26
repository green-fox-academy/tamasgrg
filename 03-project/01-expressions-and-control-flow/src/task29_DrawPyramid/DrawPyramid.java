package task29_DrawPyramid;

import java.util.Scanner;

// Write a program that reads a number from the standard input, then draws a
// pyramid like this:
//
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as the number was
public class DrawPyramid {
  public static void main(String[] args) {

    Scanner s = new Scanner(System.in);
    int height = s.nextInt();

    char c = '*';
    char e = ' ';

    for (int i = 0; i < height; i++) {

      for (int j = 0; j < height - i; j++) {
        System.out.print(e);
      }
      for (int k = 0; k < i * 2 + 1; k++) {
        System.out.print(c);
      }

      System.out.println();
    }

  }
}
