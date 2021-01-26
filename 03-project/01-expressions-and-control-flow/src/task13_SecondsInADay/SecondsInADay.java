package task13_SecondsInADay;

public class SecondsInADay {
  public static void main(String[] args) {
    int currentHours = 14;
    int currentMinutes = 34;
    int currentSeconds = 42;

    // Write a program that prints the remaining seconds (as an integer) from a
    // day if the current time is represented by the variables
    int timePassed = (currentHours * 60 + currentMinutes) * 60 + currentSeconds;
    int dayInSeconds = 24 * 60 * 60;
    System.out.println(dayInSeconds - timePassed);
  }
}