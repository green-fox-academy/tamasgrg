# The Reddit ASP.NET Core backend

We'll create a simple reddit clone application, where the users can create posts
and upvote / downvote existing posts. Later on you can extend this
functionality.

This page focuses on the RESTful backend written in C# .NET Core.

## Create a new Project

- Set up a new project
- You'll need these packages:
  - `Mvc`
  - `.Tools` or `.Tools.DotNet`
  - `.SqlServer`, `.Sqlite` or `Npgsql`
- Setup he Middlewares in your `Startup.cs` file

## Check out the Api Spec

- [API Specification](../apispec.md)
- Think about how many endpoints will be needed
- Think what type of model will you need, with what fields and methods
- You don't need to worry about Headers and status codes, that will be set by
  ASP.NET automatically if you do everything right
- *Ignore the (Optional) parts at first, those are parts of the optional tasks
  at the end*

## The Post

- Setup a new database called `reddit`
- Setup your database connection with the connection string in the
  `appsettings.json` file
- [Help](https://github.com/green-fox-academy/teaching-materials/tree/master/workshop/backend-orm/cs-asp.net.md#project-setup)
  to set up database
- Create the outline for our models
- Create a `Post` class, with a necessary properties (based on the API spec)
  - You can add anything else if you'd like to

## Setting services

- Create the outline for our services
- Create a PostRepository
- Inject it in the PostsController
- Create the first endpoint for [listing the posts](../apispec.md#get-posts)
- Make sure that it returns the same type of JSON object as specified

## Adding

- Create the endpoint as specified for
  [adding a new post](../apispec.md#post-posts)
- Make sure that you expect the proper object as parameter
- And return the proper object as a response
- And also save the Post to your database

## Vote

- Create the endpoints if you haven't already (for
  [upvote](../apispec.md#put-postsidupvote) and
  [downvote](../apispec.md#put-postsiddownvote) separately)
- The voting urls should look like this: `/posts/5/upvote` for upvoting the post
  with the id 5
- Then you'll have this id as a parameter in your controller's method, so you
  can find the actual Post object
- Increment or decrement the score
- Save it and respond with the proper object

## Extending functionality

- Add users
  - User model will be needed
  - Post model will be updated
  - Extend every request but getting posts to receive a required HTTP header
    parameter (marked as optional in the apispec):

```csharp
Request.HttpContext.Response.Headers.Add("header-name", "header-value");
```

- Save the user with the post
- Add [Delete](../apispec.md#delete-postsid) /
  [Update](../apispec.md#put-postsid) functionality enabled for the users own
  posts
  - When updating update the timestamp as well
- Replace score with vote model
  - connect it to a post and the user
  - calculate the score of a post by using this model
  - make sure that every user gets to vote only once on a post
  - and when listing the posts you return the vote of the user for each post
    (marked as optional in the apispec)
