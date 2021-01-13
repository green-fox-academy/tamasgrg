import org.junit.Test;

import static org.junit.Assert.*;


public class TestQuoteSwap {
  ArrayList<String> list = new ArrayList<String>(Arrays.asList("What", "I", "do", "create,", "I", "cannot", "not", "understand."));

  @Test
  public void testQuoteSwap(){
    assertEquals("What I cannot create I do not understand.", QuoteSwap.quoteSwap(list));
  }

}
