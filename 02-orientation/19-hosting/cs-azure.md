# Hosting on Azure

We can run our web apps on localhost, but how do we share it with others?

## Materials & Resources

### Environment

- Sign up for Azure free tier
  - <https://azure.microsoft.com/free>
- Install
  [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-cli-latest)
  - Login using `az login` in a terminal window
- In Visual Studio log in with your Microsoft account associated with the Azure
  Free Tier

### Materials

| Material                                                                                                                                                      |      Time |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------: |
| [Getting Started: Azure App Service Web Apps](https://www.youtube.com/watch?v=I3fadTfyHgk)                                                                    |      6:20 |
| [Create a Web App with ASP.NET and Azure App Service](https://azure.microsoft.com/tr-tr/resources/videos/create-a-web-app-with-aspnet-and-azure-app-service/) |      2:34 |
| [Create Azure Web App in the Azure Portal](https://www.youtube.com/watch?v=Yp6x43gORY8)                                                                       |      5:54 |
| **Azure CLI**                                                                                                                                                 |           |
| [Build and Deploy Web Apps from Azure CLI 2.0](https://channel9.msdn.com/Shows/Azure-Friday/Build-and-Deploy-Web-Apps-from-Azure-CLI-20)                      |     10:22 |
| [Connect a Web App to a SQL Database with the Azure CLI](https://markheath.net/post/connect-web-app-sql-database-azure-cli)                                   | 5min read |

#### Samples (optional)

<https://docs.microsoft.com/en-us/azure/app-service/app-service-cli-samples>

## Material Review

- What is hosting?
- What is deployment?
- What are environment variables?
- Why do we need logging?
- What are Azure App Services?
- How to use the Azure CLI?
  - `az login`
  - `az webapp`
  - `az sql`
- How to read the logs of an Azure Web App?
- What is Continuous Integration?

## Deploy the ToDo app

We're deploying the previously created ToDo app to Azure.

### Prepare the migrations

In order to have your database migrated on the remote server you have to set up
live migrations in the `Startup.cs` file:

```csharp
public void Configure(IApplicationBuilder app, IHostingEnvironment env, ApplicationContext applicationContext)
{
    ...

    applicationContext.Database.Migrate();

    ...
}
```

### Deployment with Visual Studio

Let's create our first Azure Web App using Visual Studio.

- Open up a previous Web App project in Visual Studio. Right click on the
  project and choose "Publish...".
- Select "App Service" and choose "Create New", then click on Publish
- Fill the form details
- Click on "Create a SQL Database" and fill the form details
- Click on "Create"

The deployment starts and after a few minutes you should have your app
published.

You can also check the newly created web app at the
[Azure Dashboard](https://portal.azure.com).

### Deployment using the CLI

Follow the steps below to create and deploy an Azure Web App using the CLI.

This requires a separate git repository for the project; therefore, if your
project is inside of another git repository, then move the project's folder
outside of the repository and initiate a new git repository just for this
project inside the project's folder.

The following commands should be applied from the root directory of the git
repository of your project.

#### Create a resource group, an App Service plan in FREE tier and a web app

Replace `<webappname>` with the name you'd like to use. Note that this must be
globally unique, so use your github user name postfixed with random characters.

```bash
az group create --location westeurope --name myResourceGroup
az appservice plan create --name <webappname> --resource-group myResourceGroup --sku FREE
az webapp create --name <webappname> --resource-group myResourceGroup --plan <webappname>
```

#### Set the account-level deployment credentials

Replace `<username>`, `<password>` and `<webappname>` with your own values
(please use a long random string for password).

```bash
az webapp deployment user set --user-name <username> --password <password>
az webapp deployment source config-local-git --name <webappname> --resource-group myResourceGroup --query url --output tsv
```

This will print the git url for the deployment which can be used as a git
remote:

```bash
git remote add azure <url>
# make sure you have every change commited before push
git push azure master
```

After the deployment you can open up a new browser tab at
`http://<webappname>.azurewebsites.net`

You can also check the newly created web app at the
[Azure Dashboard](https://portal.azure.com).

### Connect to a SQL Server

Now that you have your web app deployed it's time to deploy the database as
well.

#### Create and configure SQL Database server

Replace `<username>`, `<sqlServerPassword>` and `<serverName>` with your own
values (please use a different long random string for the database password).

```bash
az sql server create --name <serverName> --resource-group myResourceGroup --location westeurope --admin-user <username> --admin-password <sqlServerPassword>
# Configure firewall for Azure access
az sql server firewall-rule create --server <serverName> --resource-group myResourceGroup --name AllowYourIp --start-ip-address "0.0.0.0" --end-ip-address "0.0.0.0"
# Create a database called 'MySampleDatabase' on server
az sql db create --server <serverName> --resource-group myResourceGroup --name MySampleDatabase --service-objective S0
```

#### Set the connection string for the database

```bash
az sql db show-connection-string --name MySampleDatabase --server <serverName> --client ado.net --output tsv
```

This will print the connection string required to connect to the database. You
must replace the `<username>` and `<password>` with the **database** username
and password.

#### Assign the connection string to an app setting in the web app

```bash
az webapp config connection-string set --connection-string-type SQLAzure --name <webappname>  --resource-group myResourceGroup --settings "DefaultConnection=<connstring>"
```

At this point you should be able to access your website with a database
configured.
