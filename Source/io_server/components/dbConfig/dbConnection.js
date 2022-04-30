const mysql = require("mysql");
const { mysqlHost, mysqlUser, mysqlPassword, mysqlDatabase, mysqlPort} = require("./dbConfig");

const pool = mysql.createPool({
    connectionLimit: 100,
    host: mysqlHost,
    user: mysqlUser,
    // port: mysqlPort,
    password: mysqlPassword,
    database: mysqlDatabase,
    multipleStatements: true
});

pool.getConnection((err)=>{
    if(err){
        throw "Error Occured: " + err;
    }else{
        console.log("MySQL Database Connected");
    }
});

module.exports = pool;