const mysql = require('mysql');

const con = mysql.createConnection({
    host: "database-1.ca9ddimducmq.us-east-2.rds.amazonaws.com",
    user: "admin",
    password: "password"

});

con.connect(function(err) {
  if (err) throw err;
   console.log("connected");
  con.query('CREATE DATABASE IF NOT EXISTS main;');
  con.query('USE main;');
  con.query('CREATE TABLE IF NOT EXISTS Bookings(room_no int NOT NULL, location varchar(30), room_type varchar(30), start_date date NOT NULL, end_date date NOT NULL);', function(error, result, fields) {
    console.log(result);
  });
  con.query('CREATE TABLE IF NOT EXISTS Hotel(location varchar(30), multiplier double, weekend_rate double, season_rate double, from_date date, to_date date);', function(error, result, fields) {
    console.log(result);
  });
  con.query('CREATE TABLE IF NOT EXISTS Room(room_type varchar(30), member double, guest double);', function(error, result, fields) {
    console.log(result);
  });
  con.end();
});
