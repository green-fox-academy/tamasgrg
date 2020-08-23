# Make an online Todo app

## Simple todo app

- Work in the previous exercise's project, just under a different path (eg.
  `localhost:3000/todo`)
- Create a simple Todo application
  - You can use elements from
    [Todo application](https://github.com/green-fox-academy/teaching-materials/tree/master/project/todo-app)
  - The basics of the backend API is already created, just cover the frontend
    side
- It should look like this:

![Simple Todo App](../assets/todos.png)

- It should contain
  - a header
  - a form for creating new todos
  - a table listing existing todos with action links
- Adding a new todo should be saved in the database, then redirect to the
  listing page
- Removing should make it happen in the database, then redirect to the listing
  page
- Push it to heroku and see how it works live

## Extending

- Add completing functionality to the backend API
- Implement the frontend action for it
- Push it again

## Use MySQL Database

- Add `mysql` npm package to your project
- Create a database called `heroku_todos` and a `todo` table in it with the
  necessary fields
  - `id`
  - `text`
  - `completed`
- Switch to the `sql-storage` instead of the simple `storage` in the backend
- Change the database access variables to yours
- Add the update functionality to the `sql-storage` to be able to complete todos
- Try out if it works!
- Change the url, username, password and database to be read out from
  environment variables
  - You can read environment variables in the node file like
    `process.env.ENV_VAR_NAME`
  - You can add environment variables to your operating system (probably you'll
    need to restart the terminal after that)
  - Name the variables properly like, `MYSQL_URL`, `MYSQL_USERNAME`,
    `MYSQL_PASSWORD` and `MYSQL_DB_NAME`
- Locally this will work out, but on Heroku there's no MySQL database running on
  the same machine where your app

Now you will have multiple options to set up the remote database.

### With Heroku's JawsDB MySQL

> [Verified Heroku](https://devcenter.heroku.com/articles/account-verification)
> account is required which means you have to add your credit card details
> though **everything is still going to be in the free plan.**

- On the Heroku Dashboard you can add a MySQL addon (JawsDB MySQL)
- Now you have a MySQL database usable with the deployed app, you just need to
  provide the same environment variables (Different environment, different
  values though)
- Go to the Dashboard Settings and `Reveal Config Vars`
- You'll see one already called `JAWSDB_URL`, generally looking like this:
  `protocol://username:password@host:port/dbname`
- That's almost good, but we need to separate it into the 4 necessary parts:
  - `host:port`
  - `username`
  - `password`
  - `dbname`
  - and put them in the same named variables, like in the local version

Hopefully now you have the application which when running locally uses the local
MySQL on your computer, while the deployed version uses a cloud hosted MySQL or
PSQL. This is a great setup generally for any kind of real web development
project.

## Optional

- You can add some design
  - hovering on row gets highlighted
  - links have different colors than the default
- Make an user-password based login system for the todos
