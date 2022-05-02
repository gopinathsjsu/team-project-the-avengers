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
  var possible=true;
  var user_id;
  var old_price;
  let res1 = await con.execute(` SELECT start_date,user_id,price FROM main.Bookings where id =${transaction_id} `)
                  .then((res)=>{
                    //return "success";
                    var RES=res[0][0];
                    var start_date= RES.start_date;
                    user_id=RES.user_id;
                    old_price=RES.price;
                    var todayDate = new Date();
                    todayDate.setHours(todayDate.getHours() - 7);

                    console.log(start_date);
                    console.log(todayDate);
                    if(start_date<=todayDate)
                    {
                      possible=false;
                      console.log("HERE");
                    }

                    
                  })
                  .catch((err)=>{
                    console.log(err);
                    return "failure"
                  })
                  if(possible==false)
                  {
                    res.status(400);
                    return res.json({"status":"Not possible"}) ;
                    
                  }
                  
 
  let result = await con.execute(` DELETE FROM main.Bookings where id =${transaction_id} `)
                  .then((res)=>{
                    
                    
                  })
                  .catch((err)=>{
                    console.log(err);
                    
                  })
    //write code for updatting user point here
    var user_points;
    let result1 = await con.execute(` SELECT user_points from main.user_table where user_id='${user_id}' `)
    .then((res)=>{
                 
      var RES=res[0][0];
      user_points=RES.user_points;
                    
    })
    .catch((err)=>{
      console.log(err);
      
    })
    user_points=user_points-(old_price)/10;
    let result2=await con.execute(` UPDATE  main.user_table set user_points=${user_points} where user_id ='${user_id}' `)
    .then((res)=>{
                 
      //var RES=res[0][0];
      //user_points=RES.user_points;
      return "Success"
                    
    })
    .catch((err)=>{
      console.log(err);
      return "Failure";
      
    })
      res.status(200);
      res.json({"status":result2});
}