const res = require('express/lib/response');
const config = require('mysql2/promise')

// const mysql = require('mysql');
//CHANGE THE NUMBER OF ROOMS GIVEN A LOCATION
exports.changePriceTable = async (req,res)=>
{
    const con = await config.createConnection({
      host: "database-1.cdhjvbwqbfsh.us-east-1.rds.amazonaws.com",
      user: "admin",
      password: "password"
  });
 
  var room_type= req.body.room_type;
  var member=req.body.member;
  var guest= req.body.guest;
  
  let result = await con.execute(` UPDATE  main.Room SET member='${member}', guest='${guest}' where room_type ='${room_type}' `)
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
                  con.close();
                  res.json({"status":result});
    

}