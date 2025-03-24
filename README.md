# Sequelize
Sequelize is a promise-based Node.js ORM tool for Postgres, MySQL, MariaDB, SQLite, Microsoft SQL Server, Oracle Database, Amazon Redshift and Snowflake’s Data Cloud. It features solid transaction support, relations, eager and lazy loading, read replication and more.

In this case, we're gonna develop a simple but complete project using sequelize ORM, express API and MySQL. In order to enhance reliability and flexibility, we're gonna use MVC architecture. Let's get started
 
# Get Started
## Initialize node project
First of all, initialize the proyect by issuing the following command in the terminal being inside the project directory `npm init -y`

## Install express
We need expressjs to deploy an API able to receive requests from clients and communicate to the DB using sequelize
`npm i express`

## Install morgan
Morgan module is used to visualize HTTP requests sent to the API in real-time
`npm i morgan`

## Install Sequelize
Before installing sequelize module, it's mandatory to install a database client according to the database engine. In this case, we must install mysql2 module as well
`npm install --save mysql2` Install mysql2
`npm i sequelize` Install sequelize

We also need to add modules type in package.json file so we can be able to export and import our wown modules
We create a script to initialize the server named as "start" script

`package.json`
```
{
  "name": "curso-sequelize-nodejs",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "type": "module", //Right here
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node ./src/index.js" //Added
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/TonyCastill/sequelize-nodejs-curso.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "type": "commonjs",
  "bugs": {
    "url": "https://github.com/TonyCastill/sequelize-nodejs-curso/issues"
  },
  "homepage": "https://github.com/TonyCastill/sequelize-nodejs-curso#readme",
  "dependencies": {
    "express": "^4.21.2",
    "morgan": "^1.10.0",
    "mysql2": "^3.14.0",
    "sequelize": "^6.37.6"
  }
}
```
Check the [documentation](https://sequelize.org/docs/v6/getting-started/)

# First steps 
Now, we create a `src/` directory to store all JS files. We're gonna use app.js to create the API server with express, and index.js to boot up the application 

```
src/
├── app.js
└── index.js

```

We create the express server
`app.js`
```
import express from 'express'; //Import module

const app = express(); //Create server

export default app; //Export module
```
We need to export the server and start listening in the main file
`index.js`

```
import app from './app.js'; // Import express app
app.listen(3000); // Initialize server
console.log('Server is listening on port', 3000);
```
 
STOPPED AT MINUTE 5:28


