import org.junit.Test;

import static org.junit.Assert.*;


public class TestIsInList {
  ArrayList<Integer> testList = (ArrayList)Arrays.asList(4, 8, 12, 25, 32, 104);
  ArrayList<Integer> list = (ArrayList)Arrays.asList(2, 4, 6, 8, 10, 12, 14, 16);

  @Test
  public void testCheckNumsFalse(){
    assertFalse(IsInList.checkNums(testList));
  }

  @Test
  public void testCheckNumsTrue(){
    assertTrue(IsInList.checkNums(list));
  }

  @Test
  public void testCheckNumsEmpty(){
    assertFalse(IsInList.checkNums(Arrays.asList()));
  }

}
