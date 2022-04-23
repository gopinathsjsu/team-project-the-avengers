const res = require('express/lib/response');
const config = require('mysql2/promise')

// const mysql = require('mysql');
//Make the bookings
exports.createBooking = async (req,res)=>
{
    const con = await config.createConnection({
      host: "database-1.cdhjvbwqbfsh.us-east-1.rds.amazonaws.com",
      user: "admin",
      password: "password"
  });

var room_no=req.body.room_no;
var room_type=req.body.room_type;
var location=req.body.location;
var start_date=req.body.start_date;
var end_date=req.body.end_date;
//var no_of_guests=req.body.no_of_guests;
var user_id=req.body.user_id;
var price=req.body.price;
console.log(""+room_no);
let result = await con.execute(` INSERT INTO main.Bookings (room_no,room_type,location,start_date,end_date,user_id,price) VALUES ( ${room_no}, '${room_type}', '${location}', '${start_date}', '${end_date}',  '${user_id}', ${price} )  `)
                  .then((res)=>{
                    //console.log(res[0][0]);
                    console.log(res)
                    
                  })
                  .catch((err)=>{
                    console.log(err);
                  })
                  res.json({"status":"success"});

}
