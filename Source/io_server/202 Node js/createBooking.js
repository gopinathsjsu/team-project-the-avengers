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
var amenities_id=req.body.amenities;
var no_of_guests=req.body.no_of_guests;
var user_id=req.user;
var new_user_points=req.body.new_user_points;
var price=req.body.price;

var am_arr = [];
let result2 = await con.execute(` SELECT * FROM main.Amenities  `)
                  .then((res)=>{
                    var RES=res[0];
                    //console.log(RES[0])
                    //write code for getting the amount of each kind of amenties.
                    for(var id=0;id<amenities_id.length;id++)
                    {
                      am_arr.push(RES[amenities_id[id]-1].amenity_name)
                    }
                    console.log(am);

                  })
                  .catch((err)=>{
                    console.log(err);
                  })
var am = am_arr.join(', ');

let result1 = await con.execute(` UPDATE main.user_table SET user_points=${new_user_points} where user_id=${user_id}   `)
                  .then((res)=>{
                    return "success";
                    //console.log(res[0][0]);
                    //console.log(res)
                    //res.json({"status":"success"});
                  })
                  .catch((err)=>{
                    console.log(err);
                    return "failure"
                    //res.json({"status":"failure"});
                  })

let result = await con.execute(` INSERT INTO main.Bookings (room_no,room_type,location,start_date,end_date,user_id,price,Amenities,guests) VALUES ( ${room_no}, '${room_type}', '${location}', '${start_date}', '${end_date}',  ${user_id}, ${price},'${am}' , ${no_of_guests})  `)
                  .then((res)=>{
                    return "success";
                    //console.log(res[0][0]);
                    //console.log(res)
                    //res.json({"status":"success"});
                  })
                  .catch((err)=>{
                    console.log(err);
                    return "failure"
                    //res.json({"status":"failure"});
                  })
  
  
                  con.close();
                 res.json({"status":result});

}
