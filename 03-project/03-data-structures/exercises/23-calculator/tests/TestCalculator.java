import org.junit.Test;

import static org.junit.Assert.assertEquals;


public class TestCalculator {

    @Test
    public void testCalculate(){
        assertEquals(6,
        Calculator.calculate("+ 3 3");
    }

    @Test
    public void testCalculate2(){
        assertEquals(16,
        Calculator.calculate("* 4 4");
    }

    @Test
    public void testCalculate3(){
        assertEquals(3,
        Calculator.calculate("- 4 1");
    }

    @Test
    public void testCalculate4(){
        assertEquals(15,
        Calculator.calculate("/ 60 4");
    }

    @Test
    public void testCalculate5(){
        assertEquals(2,
        Calculator.calculate("% 12 5");
    }

}
