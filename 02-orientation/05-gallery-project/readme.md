# JavaScript image slider

## Project description

Create a fully functional image gallery using HTML, CSS and JavaScript

### Outline and purpose

| **Input Skills**                                                       |                                                           **Output Skills** |
| :--------------------------------------------------------------------- | --------------------------------------------------------------------------: |
| Some HTML and CSS experience                                           |                        More experience in recreating an exact, given design |
| JavaScript basic expressions                                           | Some experience in writing more complex code from the basic building blocks |
| JavaScript basic datastructures                                        |                                         Ability to manipulate DOM with code |
| Some experience with DOM                                               |                   Interactive websites: Query selectors and event listeners |
| Understand user stories and break them down to small development tasks |                                                 Try to keep your code clean |
| Use of kanban board/plan and manage your own work                      |                                 More experience in alone project management |

### Design

![Gallery mockup](slider.png)

[Arrow asset](arrow.svg)

## User stories

### Before you start to code

- Imagine what you have to do
- Create sketch-up(s) to help plan your HTML and CSS
- Figure out gallery data structure and make sure the program is data driven
- Design your code, figure out a reasonable file and folder structure
- Plan your functions and variables
- Prepare your user events

### Layout and behaviour specification

- As it is an image gallery, it should look nice. The design should be very
  similar to the example above. Plus, it should have a title as well.
- It should be in the middle of the screen, with fixed size.
- The image side ratio should be 16:9
- The gallery's content should be divided into two main parts: to the photo
  viewer and to the thumbnails.
- The photo viewer block should contain the two arrow buttons on the sides and
  the currently chosen photo in the middle.
- The thumbnails part should contain - as its name says - the small thumbnails,
  under the photo viewer block.
- The currently showed photo should have a half transparent description block on
  the bottom, with the photo's title and story.

### Navigation/Interaction

- As we open the gallery the first picture from our collection should appear in
  the photo viewer area
- The related (first) thumbnail should be marked as active as well (outline,
  border.. etc.)
- By clicking on the arrow buttons on the sides, the content of the viewer block
  (the photo and its description) should change to the next or previous item.
- At the same time, the current thumbnail's outline/box-shadow should change
  based on the currently picked photo.
- If the gallery displays the first image, pressing the previous button should
  show the last one.
- If the gallery displays the last image, pressing the next button should show
  the first one.
- By clicking on a thumbnail, the image displays in the viewer area.
- The arrow buttons, the viewer area's content and the thumbnail's
  outline/border should work synchronously.

### After you finished everything

#### Do some little enhancements

- Deploy it to your own [github page](https://pages.github.com/)
- Work more on your navigation
  - The gallery can be controlled by the arrow keys.
  - The gallery should handle "infinite amount" of images, so the thumbnails
    should be scrollable to (implementation is up to you)
- Work more on your thumbnails
  - When hovering over a thumbnail, the cursor should be a pointer.
  - When hovering over a thumbnail, a pop-up should appear with the title of
    the picture.
- Allow the gallery to be configured to render into a specific element (e. g.
  `destination: '#gallery'`)

#### Or create your own stories

- Fill the site with your individual content
- ...