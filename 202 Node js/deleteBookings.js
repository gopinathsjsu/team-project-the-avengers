const res = require('express/lib/response');
const config = require('mysql2/promise')

// const mysql = require('mysql');
//RETURN THE NUMBER OF ROOMS OF EACH ROOM TYPE GIVEN A LOCATION
exports.deleteBookings = async (req,res)=>
{
    const con = await config.createConnection({
      host: "database-1.cdhjvbwqbfsh.us-east-1.rds.amazonaws.com",
      user: "admin",
      password: "password"
  });
  var transaction_id=req.body.transaction_id;
  let ans={};
  let result = await con.execute(` DELETE FROM main.Bookings where id =${transaction_id} `)
                  .then((res)=>{
                    return "success";
                    
                  })
                  .catch((err)=>{
                    console.log(err);
                    return "failure"
                  })
                  res.json({"status":result});
}