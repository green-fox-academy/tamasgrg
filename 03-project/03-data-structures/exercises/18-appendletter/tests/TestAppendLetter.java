import org.junit.Test;

import static org.junit.Assert.assertEquals;


public class TestAppendLetter {

    @Test
    public void testAppendLetter(){
        assertEquals(new ArrayList<String>(Arrays.asList("anaconda", "zebra")),
        AppendLetter.appendA((ArrayList)Arrays.asList("anacond", "zebr")));
    }

    @Test
    public void testAppendLetterEmpty(){
        assertEquals(new ArrayList<String>(),
        AppendLetter.appendA((ArrayList)Arrays.asList()));
    }

}
