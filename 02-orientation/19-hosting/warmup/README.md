# First Heroku Project

## Check the previously installed Heroku CLI

- Open a Git Bash
- On Windows:
  - `winpty heroku login`
- On anything else:
  - `heroku login`
- Log in using the email address and password you used when creating your Heroku
  account
- You should get `Logged in as example@mail.com`

## Initialize the project

- fork this repository:
  - Java: `https://github.com/green-fox-academy/hosting-heroku-java`
  - TypeScript: `https://github.com/green-fox-academy/hosting-heroku-javascript`
- Clone it
- Move into the cloned directory
- Open it with IntelliJ, check the code, try to run it in localhost.
- Make the root path (`/`) to a
  [counter app](../../backend-intro/java.md#web-greet-counter-app)
- `heroku create`
  - You should get `Creating app... done` and some weird project name
  - **This creates a Git repository (if not created already) so whenever you do
    this make sure, you're not inside another one** (eg. your daily workshop
    repository)
- Add and commit
- `git push heroku master`
- `heroku open`
- You should get a freshly opened new web browser tab, containing your online
  server's frontend
- `heroku logs` show you the application logs
- Also try `heroku logs --tail`. It is continuously waiting for new lines, and
  display them as they appear
- Open [Heroku Dashboard](https://dashboard.heroku.com/apps). You can manage
  your projects here. You can also check the logs, application status here.
