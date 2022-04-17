const mysql = require('mysql');

const con = mysql.createConnection({
    host: "database-1.ca9ddimducmq.us-east-2.rds.amazonaws.com",
    user: "admin",
    password: "password"
});


/*con.connect(function(err) {
    con.query(`INSERT INTO main.Bookings (room_no, location, room_type, start_date,end_date) VALUES (1, 'San Jose', 'A', '2022-04-26','2022-04-29')`, function(err, result, fields) {
        if (err) throw err;
        if (result) console.log(result);
        if (fields) console.log(fields);
    });

    con.end();
});*/
/*con.connect(function(err) {
    if (err) throw err;
    var sql = "DROP TABLE main.Bookings";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table deleted");
    });
    con.end();
  });*/

  /*con.connect(function(err) {
    con.query(`INSERT INTO main.Hotel (location , multiplier , weekend_rate , season_rate ) VALUES ('San Jose', 1.5,1,1)`, function(err, result, fields) {
        if (err) throw err;
        if (result) console.log(result);
        if (fields) console.log(fields);
    });

    con.end();
});*/



con.connect(function(err) {
    con.query(`INSERT INTO main.Room VALUES ('Queen Deluxe', 259,244)`, function(err, result, fields) {
        if (err) throw err;
        if (result) console.log(result);
        if (fields) console.log(fields);
    });

    con.end();
});