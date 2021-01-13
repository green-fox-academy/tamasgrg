import org.junit.Test;

import static org.junit.Assert.*;


public class TestSolarSystem {
  ArrayList<String> planetList = new ArrayList<String>(Arrays.asList("Mercury","Venus","Earth","Mars","Jupiter","Uranus","Neptune"));
  ArrayList<String> fullPlanetList = new ArrayList<String>(Arrays.asList("Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"));

  @Test
  public void testPutSaturn(){
    assertEquals(fullPlanetList, SolarSystem.putSaturn(planetList));
  }

}
