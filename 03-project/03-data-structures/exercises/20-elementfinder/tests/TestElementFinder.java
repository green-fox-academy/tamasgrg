import org.junit.Test;

import static org.junit.Assert.assertEquals;


public class TestElementFinder {

  ArrayList<Integer> arrayList = (ArrayList)Arrays.asList(1,2,3,4,5);
  ArrayList<Integer> arrayList2 = (ArrayList)Arrays.asList(1,2,7,4,5);

  @Test
  public void testContainsSeven(){
    assertEquals("Noooooo",
    ElementFinder.containsSeven(arrayList));
  }

  @Test
  public void testContainsSeven2(){
    assertEquals("Hoorray",
    ElementFinder.containsSeven(arrayList2));
  }

  @Test
  public void testContainsSeven3(){
    assertEquals("Noooooo",
    ElementFinder.containsSeven(Arrays.asList()));
  }
}
