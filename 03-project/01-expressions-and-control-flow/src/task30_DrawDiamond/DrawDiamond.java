package task30_DrawDiamond;

// Write a program that reads a number from the standard input, then draws a
// diamond like this:
//
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as the number was

import java.util.Scanner;

public class DrawDiamond {
  public static void main(String[] args) {

    Scanner s = new Scanner(System.in);
    int height = s.nextInt();

    char c = '*';
    char e = ' ';

    for (int i = 0; i < height / 2; i++) {
      for (int j = 0; j < height / 2 - i; j++) {
        System.out.print(e);
      }
      for (int k = 0; k < i * 2 + 1; k++) {
        System.out.print(c);
      }
      System.out.println();
    }

    if (height % 2 != 0) {
      for (int i = 0; i < height; i++) {
        System.out.print(c);
      }
    } else {
      System.out.print(e);
      for (int i = 0; i < height - 1; i++) {
        System.out.print(c);
      }
    }
    System.out.println();

    for (int i = 0; i < height / 2; i++) {
      if (height % 2 != 0) {
        for (int j = 0; j <= i; j++) {
          System.out.print(e);
        }
        for (int k = 0; k < height - 2 - i * 2; k++) {
          System.out.print(c);
        }
      } else {
        for (int j = 0; j <= i + 1; j++) {
          System.out.print(e);
        }
        for (int k = 0; k < height - 2 - i * 2 - 1; k++) {
          System.out.print(c);
        }
      }
      System.out.println();
    }
  }

}
