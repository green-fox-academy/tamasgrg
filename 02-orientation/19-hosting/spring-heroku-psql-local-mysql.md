# Set up Spring Boot application to use PostgreSQL remotely but MySQL locally

- Create the Git repository
  - `git init`
- Create the Heroku application in the European region
  - `heroku create <application name> --region eu`
- Add the Heroku Postgres add-on
  - `heroku addons:create heroku-postgresql`
- Check the database credentials from the `DATABASE_URL` environment variable on
  Heroku
  - List the environment variables
    - `heroku config`
  - The URL's format is:
    `postgres://<username>:<password>@<host>:<port>/<database>`
  - For example in the following case
    `postgres://gsmgioptiryjzd:4ba76ba62accb0b11439491ddb00b291ff55e222174e497d51ba6b79296694e1@ec2-54-217-223-175.eu-west-1.compute.amazonaws.com:5432/d9ll74g3ua381d`
    - The username is `gsmgioptiryjzd`
    - The password is
      `4ba76ba62accb0b11439491ddb00b291ff55e222174e497d51ba6b79296694e1`
    - The host is `ec2-54-217-223-175.eu-west-1.compute.amazonaws.com`
    - The port is `5432`
    - The database is `d9ll74g3ua381d`
- Set the `DATASOURCE_URL` environment variable on Heroku
  - `heroku config:set DATASOURCE_URL=jdbc:postgresql://<host>:<port>/<database>`
  - The final command should look something like this:
    `heroku config:set DATASOURCE_URL=jdbc:postgresql://ec2-54-217-223-175.eu-west-1.compute.amazonaws.com:5432/d9ll74g3ua381d`
- Set the `DATASOURCE_USERNAME` environment variable on Heroku
  - `heroku config:set DATASOURCE_USERNAME=<username>`
- Set the `DATASOURCE_PASSWORD` environment variable on Heroku
  - `heroku config:set DATASOURCE_PASSWORD=<password>`
- If needed set the `HIBERNATE_DIALECT` environment variable on Heroku
  - `heroku config:set HIBERNATE_DIALECT=org.hibernate.dialect.PostgreSQLDialect`

## `application.properties`

- Read the datasource's url from environment variable
  - `spring.datasource.url=${DATASOURCE_URL}`]
- Read the datasource's username from environment variable
  - `spring.datasource.username=${DATASOURCE_USERNAME}`
- Read the datasource's password from environment variable
  - `spring.datasource.password=${DATASOURCE_PASSWORD}`
- Set the Hibernate's DDL to `create-drop`
  - `spring.jpa.hibernate.ddl-auto=create-drop`
- If needed read the dialect from environment variable
  - `spring.jpa.properties.hibernate.dialect=${HIBERNATE_DIALECT}`

## Dependencies

- Ensure that you have MySQL as dependency
  - `runtimeOnly('mysql:mysql-connector-java')`
- Ensure that you have PostgreSQL as dependency as well
  - `runtimeOnly('org.postgresql:postgresql')`

## Local environment variables

- Do not forget to add the environment variables locally as well

## Publish it

- Add everything to staging
  - `git add -A`
- Commit
  - `git commit -m "Make the World a better place"`
- Push to the Heroku remote's master branch
  - `git push -u heroku master`
