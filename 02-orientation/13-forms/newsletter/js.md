# Newsletter

![screenshot](../assets/newsletter.png)

This exercise should have two components: a frontend with a simple HTML form and
an Express.js backend.

## Frontend

- Create a simple form featuring two fields
  - Name (call it `username`)
  - Email (call it `email`)
- Both fields should be required via HTML5 form validation
- The frontend should send the form via POST method to the backend service.
- Action should be `http://localhost:3000/signup`
- Try to implement the design above if you have time but keep in mind that
  functionality should be the top priority

## Backend

- Create a `server.js` file
- Create a `/signup` endpoint that handles the submitted form data
- Send back some HTML to the browser with the submitted data:
  - `<h1>Thanks {username}, we will send updates to {email}</h1>`

> **Hint**: <https://expressjs.com/en/api.html#req.body>
