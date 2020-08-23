# Make an online Todo app

## Simple todo app

- Work in the previous exercise's project, just under a different path (eg.
  `localhost:8080/todo`)
- Create a simple Todo application
  - You can use elements from
    [Todo application](https://github.com/green-fox-academy/teaching-materials/tree/master/project/todo-app)
- It should look like this:

![Simple Todo App](../assets/todos.png)

- It should contain
  - a header
  - a form for creating new todos
  - a table listing existing todos with action links
- Adding a new todo should be saved in the database, then redirect to the
  listing page
- Completing and removing should make it happen in the database, then redirect
  to the listing page
- Push it to Heroku and see how it works live

## Using database

- Configure the application so it uses your MySQL database
- The configuration should look something like this
  ```text
  spring.datasource.url=jdbc:mysql://localhost:3306/dbname
  spring.datasource.username=yourLocalMysqlUsernameProbablyRoot
  spring.datasource.password=yourLocalMysqlPassword
  spring.jpa.hibernate.ddl-auto=update
  spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL5Dialect
  spring.logging.level.org.hibernate.SQL=debug
  spring.jpa.show-sql=true
  spring.profiles.active=prod
  ```
- Change the url, username and password to be read out from environment
  variables
  - You can read environment variables in the properties file like
    `${ENV_VAR_NAME}`
  - You can add custom environment variables easily at IntelliJ edit Run
    Configurations
  - Name the variables properly like, `MYSQL_URL`, `MYSQL_USERNAME` and
    `MYSQL_PASSWORD`
- Locally this will work out, but on Heroku there's no MySQL database running on
  the same machine where your app

Now you will have multiple options to set up the remote database.

### With Heroku's JawsDB MySQL

> [Verified Heroku](https://devcenter.heroku.com/articles/account-verification)
> account is required which means you have to add your credit card details
> though **everything is still going to be in the free plan**.

- On the Heroku Dashboard you can add a MySQL addon (JawsDB MySQL)
- Now you have a MySQL database usable with the deployed app, you just need to
  provide the same environment variables (Different environment, different
  values though)
- Go to the Dashboard Settings and `Reveal Config Vars`
- You'll see one already called `JAWSDB_URL`, generally looking like this:
  `protocol://username:password@host:port/dbname`
- That's almost good, but we need to separate it into the 3 necessary parts:
  - `jdbc:protocol://host:port/dbname`
  - `username`
  - `password`
  - and put them in the same named variables, like in the local version
  - don't leave out the `jdbc:` from the beginning of the url

### With Heroku's PostgreSQL

> PostgreSQL is a different database. It uses SQL so in many things it is
> similar to MySQL. Generally **it is a bad practice** to use different database
> between development and production environment.

- [Set up Spring Boot application to use PostgreSQL remotely but MySQL locally](../spring-heroku-psql-local-mysql.md)

Hopefully now you have the application which when running locally uses the local
MySQL on your computer, while the deployed version uses a cloud hosted MySQL or
PSQL. This is a great setup generally for any kind of real web development
project.

## Optional

- You can add some design
  - hovering on row gets highlighted
  - links have different colors than the default
- Make an user-password based login system for the todos
