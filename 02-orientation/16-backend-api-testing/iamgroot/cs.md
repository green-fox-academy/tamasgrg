# I am groot!

- First create a new ASP.NET Core project
- Create a `GuardianController`
- Create a `GET /groot` endpoint
  - That receives a query parameter: `message=somemessage`
  - And responds with a json object with a translated text like below:
    ```json
    {
      "received": "somemessage",
      "translated": "I am Groot!"
    }
    ```
- if no input is provided:
  ```json
  {
    "error": "I am Groot!"
  }
  ```
- Create a YourProject.IntegrationTests xUnit test project
- Add the required packages
- Add your previous project to the references/dependencies
- Write a test where you check:
  - With giving a parameter the status is ok,
    - and the given response is the same as expected
  - Without giving a parameter the status is not ok,
    - and the given error response is the same as expected

[![](../assets/groot.jpg)](https://www.youtube.com/watch?v=HplYmXMo4Jc)
