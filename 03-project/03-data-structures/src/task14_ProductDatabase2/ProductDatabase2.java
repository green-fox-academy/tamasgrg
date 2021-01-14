package task14_ProductDatabase2;

import java.util.HashMap;
import java.util.Map;

public class ProductDatabase2 {
  public static void main(String[] args) {
//    We are going to represent our products in a map where the keys are strings representing the product's name and the values are numbers representing the product's price.
//
//    Create a map with the following key-value pairs.
//
//    Product name (key)	Price (value)
//    Eggs	200
//    Milk	200
//    Fish	400
//    Apples	150
//    Bread	50
//    Chicken	550
    Map<String, Integer> map = new HashMap<String, Integer>() {{
      put("Eggs", 200);
      put("Milk", 200);
      put("Fish", 400);
      put("Apples", 150);
      put("Bread", 50);
      put("Chicken", 550);
    }};

//    Create an application which solves the following problems.
//
//    Which products cost less than 201? (just the name)
    for (Map.Entry<String, Integer> entry : map.entrySet()) {
      if (entry.getValue() < 201) System.out.println(entry.getKey());
    }

//    Which products cost more than 150? (name + price)
    for (Map.Entry<String, Integer> entry : map.entrySet()) {
      if (entry.getValue() > 150) System.out.println(entry.getKey() + " " + entry.getValue());
    }
  }
}
