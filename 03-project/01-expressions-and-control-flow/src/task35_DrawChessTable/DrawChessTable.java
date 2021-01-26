package task35_DrawChessTable;

// Crate a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
//

public class DrawChessTable {
  public static void main(String[] args) {

    char black = '%';
    char white = ' ';
    int size = 8;

    for (int i = 0; i < size; i++) {
      String row = "";
      for (int j = 0; j < size; j++) {
        if ((i % 2 != 0 && j % 2 != 0) || (i % 2 == 0 && j % 2 == 0)) {
          row += black;
        } else {
          row += white;
        }
      }
      System.out.println(row);
    }
  }
}
