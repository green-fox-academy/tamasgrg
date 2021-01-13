package task04_TodoPrint;

public class TodoPrint {
  public static void main(String... args){
    String todoText = " - Buy milk\n";
    // Add "My todo:" to the beginning of the todoText
    // Add " - Download games" to the end of the todoText
    // Add " - Diablo" to the end of the todoText but with indention

    // Expected output:

    // My todo:
    //  - Buy milk
    //  - Download games
    //      - Diablo

    String fullText =
        "My todo:" +
            "\n" +
            todoText +
            " - Download games" +
            "\n" +
            "\t" +
            " - Diablo";

    System.out.println(fullText);
  }
}
