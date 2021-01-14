package task09_MapIntroduction2;

import java.util.HashMap;
import java.util.Map;

public class MapIntroduction2 {
  public static void main(String[] args) {
//    Create a map where the keys are strings and the values are strings with the following initial values
//
//    Key	Value
//    978-1-60309-452-8	A Letter to Jo
//    978-1-60309-459-7	Lupus
//    978-1-60309-444-3	Red Panda and Moon Bear
//    978-1-60309-461-0	The Lab
    Map<String, String> map = new HashMap<String, String>() {{
      put("978-1-60309-452-8", "A Letter to Jo");
      put("978-1-60309-459-7", "Lupus");
      put("978-1-60309-444-3", "Red Panda and Moon Bear");
      put("978-1-60309-461-0", "The Lab");
    }};

//    Print all the key-value pairs in the following format
//
//    A Letter to Jo (ISBN: 978-1-60309-452-8)
//    Lupus (ISBN: 978-1-60309-459-7)
//    Red Panda and Moon Bear (ISBN: 978-1-60309-444-3)
//    The Lab (ISBN: 978-1-60309-461-0)
    for (String key : map.keySet()) {
      System.out.println(map.get(key) + String.format(" (ISBN: %s)", key));
    }

//    Remove the key-value pair with key 978-1-60309-444-3
    map.remove("978-1-60309-444-3");

//    Remove the key-value pair with value The Lab
    String key = "";
    for (Map.Entry<String, String> entry : map.entrySet()) {
      if (entry.getValue().equals("The Lab")) key = entry.getKey();
    }
    System.out.println(map.remove(key));

//    Add the following key-value pairs to the map
//    Key	Value
//    978-1-60309-450-4	They Called Us Enemy
//    978-1-60309-453-5	Why Did We Trust Him?
    map.put("978-1-60309-450-4", "They Called Us Enemy");
    map.put("978-1-60309-453-5", "Why Did We Trust Him?");

//    Print whether there is an associated value with key 478-0-61159-424-8 or not
    System.out.println(map.containsKey("478-0-61159-424-8"));

//    Print the value associated with key 978-1-60309-453-5
    System.out.println(map.get("978-1-60309-453-5"));
  }
}
