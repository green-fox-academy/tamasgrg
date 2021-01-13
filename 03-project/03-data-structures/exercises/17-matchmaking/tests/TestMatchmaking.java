import org.junit.Test;

import static org.junit.Assert.assertEquals;


public class TestMatchmaking {
  ArrayList<String> girls = new ArrayList<String>(Arrays.asList("Eve","Ashley"));
  ArrayList<String> boys = new ArrayList<String>(Arrays.asList("Joe","Fred","Tom"));

  @Test
  public void testMakingMatches(){
    assertEquals(Arrays.asList("Eve", "Joe", "Ashley", "Fred"), Matchmaking.makingMatches(girls, boys));
  }

  @Test
  public void testMakingMatchesEmpty(){
    assertEquals(Arrays.asList(), Matchmaking.makingMatches(Arrays.asList(), Arrays.asList()));
  }

}
