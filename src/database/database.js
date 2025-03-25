import Sequelize from 'sequelize';
/**
 * Sequelize is referred to the
 * library name, while sequelize
 * it's an instance of Sequelize
**/
//CREATE A DB CONNECTION
//1st parameter: DB name
//2nd parameter: User
//3rd parameter: Password
export const sequelize = new Sequelize('projectsdb','bmx','bmx',{
    host: 'localhost', //Where is located the database
    dialect: 'mysql' //MySQL engine
})
