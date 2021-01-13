import org.junit.Test;

import static org.junit.Assert.*;


public class TestReverse {
  String reversed = "olleh";

  @Test
  public void testReverse(){
    assertEquals("hello", Reverse.reverse(reversed));
  }

}
