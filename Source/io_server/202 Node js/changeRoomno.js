const res = require('express/lib/response');
const config = require('mysql2/promise')

// const mysql = require('mysql');
//CHANGE THE NUMBER OF ROOMS GIVEN A LOCATION
exports.changeRoomno = async (req,res)=>
{
    const con = await config.createConnection({
      host: "database-1.cdhjvbwqbfsh.us-east-1.rds.amazonaws.com",
      user: "admin",
      password: "password"
  });
  var location=req.body.location;
  //let ans={};
  var KS= req.body.King_Suite;
  var QS=req.body.Queen_Suite;
  var JS= req.body.Junior_Suite;
  var QD=req.body.Queen_Deluxe;
  let result = await con.execute(` UPDATE  main.location SET King_Suite='${KS}', Queen_Suite='${QS}', Junior_Suite='${JS}',Queen_Deluxe='${QD}' where location ='${location}' `)
                  .then((res)=>{
                    //console.log(res[0][0]);
                    var RES=res[0][0];
                    ans=RES;
                    
                  })
                  .catch((err)=>{
                    console.log(err);
                  })
                  res.json({"status":"success"});
}