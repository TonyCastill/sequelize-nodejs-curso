import app from './app.js'; // Import express app
import {sequelize} from './database/database.js';

async function main(){ //A promise
    try{
        await sequelize.authenticate(); //Wait for the connection to establish
        console.log("Connection has been established successfully");
        app.listen(3000);
        console.log('Server is listening on port', 3000);
    }catch (error){
        console.log("Unable to connect to the database: ",error);
    }
}

main();


