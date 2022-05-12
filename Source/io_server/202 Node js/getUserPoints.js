const res = require('express/lib/response');
const config = require('mysql2/promise')

// const mysql = require('mysql');
//RETURN THE NUMBER OF ROOMS OF EACH ROOM TYPE GIVEN A LOCATION
exports.getUserPoints = async (req,res)=>
{
    const con = await config.createConnection({
      host: "database-1.cdhjvbwqbfsh.us-east-1.rds.amazonaws.com",
      user: "admin",
      password: "password"
  });
  var user_id=req.user;
  let ans={};
  let result = await con.execute(` SELECT user_points FROM main.user_table where user_id ='${user_id}' `)
                  .then((res)=>{
                    //console.log(res[0][0]);
                    var RES=res[0][0];
                    ans=RES;
                    
                  })
                  .catch((err)=>{
                    //console.log(err);
                  })
                  con.close();
                  res.json(ans);
}