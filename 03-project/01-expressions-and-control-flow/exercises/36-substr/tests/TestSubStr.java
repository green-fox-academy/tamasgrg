import org.junit.Test;
import static org.junit.Assert.*;

public class TestSubStr {

  @Test
  public void testHappyCase() {
    assertEquals(7, SubStr.subStr("this is what I'm searching in", "searching"));
   }

  @Test
  public void testSadCase() {
    assertEquals(-1, SubStr.subStr("this is what I'm searching in", "not"));
   }
}
