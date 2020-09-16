//Create a PostIt class that has
//        a backgroundColor represented by a String
//        a text on it
//        a textColor represented by a String
//        Create a few example post-it objects:
//        an orange with blue text: "Idea 1"
//        a pink with black text: "Awesome"
//        a yellow with green text: "Superb!"

package PostIt;

public class PostIt {

    String backgroundColor;
    String text;
    String textColor;

    public static void main(String[] args) {

        PostIt postIt1 = new PostIt();
        postIt1.backgroundColor = "orange";
        postIt1.text = "Idea 1";
        postIt1.textColor = "blue";

        PostIt postIt2 = new PostIt();
        postIt2.backgroundColor = "pink";
        postIt2.text = "Awesome";
        postIt2.textColor = "black";

        PostIt postIt3 = new PostIt();
        postIt3.backgroundColor = "yellow";
        postIt3.text = "Superb!";
        postIt3.textColor = "green";

    }

}
