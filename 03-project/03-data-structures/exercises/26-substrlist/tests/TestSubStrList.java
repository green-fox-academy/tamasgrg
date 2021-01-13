import org.junit.Test;
import static org.junit.Assert.*;

public class TestSubStrList {
  @Test
  public void testHappyCase() {
    String[] searchArr = new String[] {"this", "is", "what", "I'm", "searching"};
    assertEquals(4, SubStrList.subStrList("ching", searchArr));
   }

  @Test
  public void testSadCase() {
    String[] searchArr = new String[] {"this", "is"};
    assertEquals(-1, SubStrList.subStrList("not", searchArr));
   }
}
