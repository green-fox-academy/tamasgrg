package task12_Cuboid;

public class Cuboid {
// Write a program that stores 3 sides of a cuboid as variables (doubles)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000
  double sideA;
  double sideB;
  double sideC;

  public Cuboid(double sideA, double sideB, double sideC) {
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }

  public void printCuboidData() {
    System.out.println("Surface Area: " + (int) (2 * sideA * sideB + 2 * sideA * sideC + 2 * sideB * sideC));
    System.out.println("Volume: " + (int) (sideA * sideB * sideC));
  }

  public static void main(String[] args) {
    Cuboid cube = new Cuboid(2, 2, 2);
    cube.printCuboidData();
  }

}
