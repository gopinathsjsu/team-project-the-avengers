const res = require('express/lib/response');
const config = require('mysql2/promise')

// const mysql = require('mysql');
//CHANGE THE NUMBER OF ROOMS GIVEN A LOCATION
exports.insertLocation = async (req,res)=>
{
    const con = await config.createConnection({
      host: "database-1.cdhjvbwqbfsh.us-east-1.rds.amazonaws.com",
      user: "admin",
      password: "password"
  });
  var location=req.body.location;
  //let ans={};
  
  let result = await con.execute(` INSERT into  main.Hotel (location,multiplier,weekend_rate,season_rate) values ( '${location}',1,1,1) `)
                  .then((res)=>{
                    //console.log(res[0][0]);
                    var RES=res[0][0];
                    ans=RES;
                    return "success";
                    
                  })
                  .catch((err)=>{
                    console.log(err);
                    return "failure";
                  })
    if(result=="failure")
    {
        return res.json({"status":result});
    }
    let result1 = await con.execute(` INSERT into  main.location (location,King_Suite,Junior_Suite,Queen_Suite,Queen_Deluxe) values ( '${location}',10,10,10,10) `)
                  .then((res)=>{
                    //console.log(res[0][0]);
                    var RES=res[0][0];
                    ans=RES;
                    return "success";
                    
                  })
                  .catch((err)=>{
                    console.log(err);
                    return "failure";
                  })
         res.json({"status":result1});
                 
}