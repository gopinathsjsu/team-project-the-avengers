const res = require('express/lib/response');
const config = require('mysql2/promise')

// const mysql = require('mysql');
//CHANGE THE NUMBER OF ROOMS GIVEN A LOCATION
exports.changeHotel = async (req,res)=>
{
    const con = await config.createConnection({
      host: "database-1.cdhjvbwqbfsh.us-east-1.rds.amazonaws.com",
      user: "admin",
      password: "password"
  });
  var location=req.body.location;
  //let ans={};
  var multiplier= req.body.multiplier;
  var weekend_rate=req.body.weekend_rate;
  var season_rate= req.body.season_rate;
  var from_date=req.body.from_date;
  var to_date=req.body.to_date;

  if(from_date==null)
  {
    let result1 = await con.execute(` UPDATE  main.Hotel SET multiplier=${multiplier},weekend_rate=${weekend_rate}, season_rate=${season_rate}, from_date=null,to_date=null where location ='${location}' `)
                  .then((res)=>{
                    //console.log(res[0][0]);
                    var RES=res[0][0];
                    ans=RES;
                    console.log("HERE")
                    return "success";
                    
                  })
                  .catch((err)=>{
                    console.log(err);
                    return "failure";
                  })
                  con.close();
                  res.json({"status":result1});
  }
  else
  {
  let result = await con.execute(` UPDATE  main.Hotel SET multiplier=${multiplier},weekend_rate=${weekend_rate}, season_rate=${season_rate}, from_date='${from_date}',to_date='${to_date}' where location ='${location}' `)
                  .then((res)=>{
                    //console.log(res[0][0]);
                    var RES=res[0][0];
                    ans=RES;
                    console.log("HERE")
                    return "success";
                    
                  })
                  .catch((err)=>{
                    console.log(err);
                    return "failure";
                  })
                  con.close();
                  res.json({"status":result});
  }
}