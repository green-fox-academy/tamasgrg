# HTML Forms

## Objectives

- Get to know HTML Form elements created for user input

## Materials

| Material                                                                                                               |  Time |
| :--------------------------------------------------------------------------------------------------------------------- | ----: |
| [My First HTML Form](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms/My_first_HTML_form)                 |  read |
| [Styling HTML 5 Forms #1 - Introduction](https://www.youtube.com/watch?v=HiHHvTcHiEk)                                  |  6:26 |
| [Styling HTML 5 Forms #4 - Styling Text Inputs](https://www.youtube.com/watch?v=3Bhrx2DumvI)                           |  6:18 |
| [Styling HTML 5 Forms #5 - Styling Select Boxes](https://www.youtube.com/watch?v=IPtyr11fjcI)                          |  3:37 |
| [JavaScript DOM Tutorial #11 - Interacting with Forms](https://www.youtube.com/watch?v=n4B7vY9SIds)                    |  5:42 |
| [HTML5 form types](https://css-tricks.com/video-screencasts/99-overview-of-html5-forms-types-attributes-and-elements/) | 49:12 |
| [Change event on MDN](https://developer.mozilla.org/en-US/docs/Web/Events/change)                                      |  read |

### Optional

| Material                                                                                          | Time |
| :------------------------------------------------------------------------------------------------ | ---: |
| [HTML Forms on MDN](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms)                    | read |
| [Web form usability](http://www.smashingmagazine.com/2011/11/extensive-guide-web-form-usability/) | read |

## Material Review

- `<form>` element
  <!-- 
  - for user interaction, they can send information to the server 
  -->
- `method` attribute
  <!-- 
  - The HTTP method that the browser uses to submit the form
  - GET: form data are appended to the action attribute URL with a '?' as
    separator, and the resulting URL is sent to the server: not safe!
  - POST: form data are included in the body of the request and sent to the
    server. 
  -->
- `action` attribute
  <!-- 
  - The URL that processes the form information
  - redirect here after submitting
  -->
- `type` attribute
  <!-- 
  - type of the input from the user we accept, see below
  -->
- `<input>` element
  <!-- 
  - interactive controls for web-based forms in order to accept data from the
    user
  -->
  - text
  - email
  - password
  - tel
  - number
  - date
  - search
  - color
  - range
- predefined options to choose from
  - checkboxes
    <!-- 
    - a user can select one or more options of a limited number of choices 
    - input name attribute will group them together
    -->
  - radiobutton
    <!-- 
    - only one radio button in a given group can be selected 
    - typically rendered as small circles, which are filled or highlighted when
      selected
    - input name attribute will group them together
    -->
  - dropdown menu
    <!--
    - select tag is the wrapper
    - option is the options
    - should have a label too
    - usually there is a default option:
      - <option value="">--Please choose an option--</option>
    -->
- `value`, `checked` attribute
  <!-- 
  - when submitting the form we can get the info by grabbing the value of the 
    field
  - name will be the key, value will be its value
  - if I give a checked value to a checkbox typed input field, it will be
    automatically checked when the form loads  
  -->
  - query with JavaScript
- `name` attribute
- `<textarea>` element
- `<label>` element
  - `for` attribute
    <!--
      - the label's for attribute will connect with the input's ID attribute 
      <label for="username">Username</label>
      <input type="text" name="username" id="username">
      - if we wrap the input with the label, clicking on it will result in 
      focusing the input field, and no need for the 'for' attribute in the
      label:
        <label>
          Username
          <input type="text" name="username">
        </label>
      - clicking on the label will put the input into focus (highlight the
      border, activates the input field)
    -->
- attributes
  - placeholder
    <!-- will disappear when we start typing -->
  - autofocus
    <!-- 
      It supports only the following elements: <button>, <input>, <select> and 
      <textarea> 
    -->
  - maxlength
    <!-- to specify the maximum number of characters allowed in a text field -->
  - min, max, step
    <!-- for range input -->
  - required
    <!-- won't let you submit without filling in the required fields -->
  - novalidation
    <!-- will exclude the validation of the field -->
- submit
  <!-- 
  - can be an input field with the 'submit' type
  - can be a simple button, the default behaviour of it will be submit anyway
  - default behaviour of submitting is:
    - sending a GET request (see above at the METHOD part)
    - navigating to the URL given in the action attribute 
  -->
- validation
  - html5 way
    <!-- 
    - with the type of the inputs and regex
    - regex: restrict the input options with the pattern attribute
      - licence plate is a good example
        <label for="license">license plate</label>
        <input type="text" pattern="[A-Z]{3}-[0-9]{3}" id="license" 
        placeholder="ABC-123"/>
    -->
  - JavaScript way
    <!-- on the frontend with functions, checking the incoming data -->

## Workshop

- [Login Form](login-form/README.md)
- [Button Disable](button-disable/README.md)
- [Movie selector](movie-selector/README.md)
- [Newsletter](newsletter/js.md)

### Optional

If you still have time left

- [Sign Up Form](sign-up-form/README.md)

## Individual Workshop Review

Please follow the styleguide:
[Our HTML & CSS styleguide](../../styleguide/html-css.md)

- What HTML element did you use for the button and why?
- Are you sure you don't have unnecessary duplications in your code?
