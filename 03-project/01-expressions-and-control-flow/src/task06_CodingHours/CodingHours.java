package task06_CodingHours;

public class CodingHours {
  public static void main(String[] args) {
    // An average Green Fox attendee codes 6 hours daily
    // The semester is 17 weeks long
    //
    int dailyHours = 6;
    int semesterLengthInWeeks = 17;
    // Print how many hours is spent with coding in a semester by an attendee,
    // if the attendee only codes on workdays.
    //
    System.out.println(semesterLengthInWeeks * dailyHours * 5);
    // Print the percentage of the coding hours in the semester if the average
    // work hours weekly is 52
    System.out.println(dailyHours * 5 / 52. * 100 + " %");
  }
}
