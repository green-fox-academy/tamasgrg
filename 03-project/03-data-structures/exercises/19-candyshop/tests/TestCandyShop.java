import org.junit.Test;

import static org.junit.Assert.assertEquals;


public class TestCandyShop {
  ArrayList<Object> arrayList = new ArrayList<Object>();
  ArrayList<Object> arrayListEmpty = new ArrayList<Object>();

  @Before
  public void setUp(){
    arrayList.add("Cupcake");
    arrayList.add(2);
    arrayList.add("Brownie");
    arrayList.add(false);
  }

  @Test
  public void testSweets(){
      assertEquals(Arrays.asList("Cupcake", "Croissant", "Brownie", "Ice cream"),
      Candyshop.sweets(arrayList));
  }

  @Test
  public void testSweetsEmpty(){
      assertEquals(Arrays.asList(),
      Candyshop.sweets(arrayListEmpty));
  }
}
