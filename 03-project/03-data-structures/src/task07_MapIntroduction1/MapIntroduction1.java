package task07_MapIntroduction1;

import java.util.HashMap;
import java.util.Map;

public class MapIntroduction1 {
  public static void main(String[] args) {
//    We are going to play with maps. Feel free to use the built-in methods where possible.
//
//    Create an empty map where the keys are integers and the values are characters
    Map<Integer, Character> map = new HashMap<>();

//    Print out whether the map is empty or not
    System.out.println(map.isEmpty());

//    Add the following key-value pairs to the map
//
//    Key	Value
//    97	a
//    98	b
//    99	c
//    65	A
//    66	B
//    67	C
    int[] keys = {97, 98, 99, 65, 66, 67};
    char[] values = {'a', 'b', 'c', 'A', 'B', 'C'};
    for (int i = 0; i < keys.length; i++) {
      map.put(keys[i], values[i]);
    }

//    Print all the keys
    for (int k : map.keySet()) System.out.println(k);

//    Print all the values
    for (char v : map.values()) System.out.println(v);

//    Add value D with the key 68
    map.put(68, 'D');

//    Print how many key-value pairs are in the map
    System.out.println(map.size());

//    Print the value that is associated with key 99
    System.out.println(map.get(99));

//    Remove the key-value pair where with key 97
    map.remove(97);

//    Print whether there is an associated value with key 100 or not
    System.out.println(map.containsKey(100));

//    Remove all the key-value pairs
    map.entrySet().clear();
    System.out.println(map);

  }
}
