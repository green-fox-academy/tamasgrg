package task03_TakesLonger;

public class TakesLonger {
  public static void main(String... args) {
    String quote = "Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law.";

    // When saving this quote a disk error has occurred. Please fix it.
    // Add "always takes longer than" to the StringBuilder (quote) between the words "It" and "you"
    // Using pieces of the quote variable (instead of just redefining the string)

    String it = "It";
    String you = "you";
    String missingPart = "always takes longer than";

    String newQuote =
        quote.substring(0, quote.indexOf(it) + it.length()) +
        " " +
        missingPart +
        " " +
        quote.substring(quote.indexOf(you));

    System.out.println(newQuote);
  }
}
