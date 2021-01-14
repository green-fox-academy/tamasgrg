package task11_TelephoneBook;

import java.util.HashMap;
import java.util.Map;

public class TelephoneBook {
  public static void main(String[] args) {
//    We are going to represent our contacts in a map where the keys are going to be strings and the values are going to be strings as well.
//
//    Create a map with the following key-value pairs.
//
//    Name (key)	Phone number (value)
//    William A. Lathan	405-709-1865
//    John K. Miller	402-247-8568
//    Hortensia E. Foster	606-481-6467
//    Amanda D. Newland	319-243-5613
//    Brooke P. Askew	307-687-2982

    Map<String , String> map = new HashMap<String, String>() {{
      put("William A. Lathan", "405-709-1865");
      put("John K. Miller",	"402-247-8568");
      put("Hortensia E. Foster",	"606-481-6467");
      put("Amanda D. Newland", "319-243-5613");
      put("Brooke P. Askew",	"307-687-2982");
    }};

//    Create an application which solves the following problems.
//
//    What is John K. Miller's phone number?
    System.out.println(map.get("John K. Miller"));

//    Whose phone number is 307-687-2982?
    String key = "";
    for (Map.Entry<String, String> entry : map.entrySet()) {
      if (entry.getValue().equals("307-687-2982")) key = entry.getKey();
    }
    System.out.println(key);

//    Do we know Chris E. Myers' phone number?
    System.out.println(map.containsKey("Chris E. Myers"));
  }
}
