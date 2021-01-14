package task13_ProductDatabase;

import java.util.HashMap;
import java.util.Map;

public class ProductDatabase {
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
//    Create an application which solves the following problems.
    Map<String, Integer> map = new HashMap<String, Integer>() {{
      put("Eggs", 200);
      put("Milk", 200);
      put("Fish", 400);
      put("Apples", 150);
      put("Bread", 50);
      put("Chicken", 550);
    }};

//    How much is the fish?
    System.out.println(map.get("Fish"));

//    What is the most expensive product?
    int maxPrice = map.values().stream().max(Integer::compare).get();
    String key = "";
    for (Map.Entry<String, Integer> entry : map.entrySet()) {
      if (entry.getValue().equals(maxPrice)) key = entry.getKey();
    }
    System.out.println(key);

//    What is the average price?
    int total = map.values().stream().reduce((sum, num) -> sum + num).get();
    System.out.println(total / map.size());

//    How many products' price is below 300?
    int count = 0;
    for (int price : map.values()) if (price < 300) count++;
    System.out.println(count);

//    Is there anything we can buy for exactly 125?
    System.out.println(map.values().contains(125));

//    What is the cheapest product?
    int minPrice = map.values().stream().min(Integer::compare).get();
    String key2 = "";
    for (Map.Entry<String, Integer> entry : map.entrySet()) {
      if (entry.getValue().equals(minPrice)) key2 = entry.getKey();
    }
    System.out.println(key2);

  }
}
