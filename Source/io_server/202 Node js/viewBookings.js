const res = require('express/lib/response');
const config = require('mysql2/promise')

// const mysql = require('mysql');
//RETURN THE NUMBER OF ROOMS OF EACH ROOM TYPE GIVEN A LOCATION
exports.viewBookings = async (req,res)=>
{
    const con = await config.createConnection({
      host: "database-1.cdhjvbwqbfsh.us-east-1.rds.amazonaws.com",
      user: "admin",
      password: "password"
  });
  var user_id=req.user;
  let ans={};
  let result = await con.execute(` SELECT * FROM main.Bookings where user_id =${user_id} order by start_date`)
                  .then((res)=>{
                    //console.log(res[0][0]);
                    var RES=res[0];
                    ans=RES;
                    
                  })
                  .catch((err)=>{
                    //console.log(err);
                  })
                  con.close();
                  res.json(ans);
}