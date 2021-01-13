package task08_Matrix;

// - Create a two dimensional array dynamically with the following content.
//   Note that a two dimensional array is often called matrix if every
//   internal array has the same length.
//   Use a loop!
//
//   1 0 0 0
//   0 1 0 0
//   0 0 1 0
//   0 0 0 1
//
//   Its length should depend on a variable
//
// - Print this two dimensional array to the output

public class Matrix {
  public static void main(String[] args) {

    int matrixSize = 4;
    int[][] matrix = new int[matrixSize][matrixSize];

    for (int i = 0; i < matrixSize; i++) {
      for (int j = 0; j < matrixSize; j++) {
        matrix[i][j] = i == j ? 1 : 0;
        System.out.print(matrix[i][j] + " ");
      }
      System.out.println();
    }

  }
}
