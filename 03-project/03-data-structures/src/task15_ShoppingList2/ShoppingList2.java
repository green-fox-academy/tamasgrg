package task15_ShoppingList2;

import java.util.HashMap;
import java.util.Map;

public class ShoppingList2 {
  public static void main(String[] args) {
//    Represent the following products with their prices
//
//    Product	Amount
//    Milk	1.07
//    Rice	1.59
//    Eggs	3.14
//    Cheese	12.60
//    Chicken Breasts	9.40
//    Apples	2.31
//    Tomato	2.58
//    Potato	1.75
//    Onion	1.10

    Map<String, Double> products = new HashMap<String, Double>() {{
      put("Milk",	1.07);
      put("Rice",	1.59);
      put("Eggs",	3.14);
      put("Cheese",	12.60);
      put("Chicken Breasts",	9.40);
      put("Apples",	2.31);
      put("Tomato",	2.58);
      put("Potato",	1.75);
      put("Onion",	1.10);
    }};

//    Represent Bob's shopping list
//
//    Product	Amount
//    Milk	3
//    Rice	2
//    Eggs	2
//    Cheese	1
//    Chicken Breasts	4
//    Apples	1
//    Tomato	2
//    Potato	1

    Map<String, Integer> bob = new HashMap<String, Integer>() {{
      put("Milk",	3);
      put("Rice",	2);
      put("Eggs",	2);
      put("Cheese",	1);
      put("Chicken Breasts",	4);
      put("Apples",	1);
      put("Tomato",	2);
      put("Potato",	1);
    }};

//    Represent Alice's shopping list
//
//    Product	Amount
//    Rice	1
//    Eggs	5
//    Chicken Breasts	2
//    Apples	1
//    Tomato	10

    Map<String, Integer> alice = new HashMap<String, Integer>() {{
      put("Rice",	1);
      put("Eggs",	5);
      put("Chicken Breasts",	2);
      put("Apples",	1);
      put("Tomato",	10);
    }};

//    Create an application which solves the following problems.
//
//    How much does Bob pay?
    double sumBob = 0;
    for (Map.Entry<String, Integer> e : bob.entrySet()) {
      if (products.containsKey(e.getKey())) {
        sumBob += e.getValue() * products.get(e.getKey());
      }
    }
    System.out.println(sumBob);

//    How much does Alice pay?
    double sumAlice = 0;
    for (Map.Entry<String, Integer> e : alice.entrySet()) {
      if (products.containsKey(e.getKey())) {
        sumAlice += e.getValue() * products.get(e.getKey());
      }
    }
    System.out.println(sumAlice);

//    Who buys more Rice?
    System.out.println(bob.get("Rice"));
    System.out.println(alice.get("Rice"));

//    Who buys more Potato?
    System.out.println(bob.get("Potato"));
    System.out.println(alice.get("Potato"));

//    Who buys more different products?
    System.out.println(bob.values().size());
    System.out.println(alice.values().size());

//    Who buys more products? (piece)
    System.out.println(bob.values().size() * bob.values().stream().reduce(Integer::sum).get());
    System.out.println(alice.values().size() * alice.values().stream().reduce(Integer::sum).get());
  }
}
