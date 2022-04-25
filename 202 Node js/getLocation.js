const res = require('express/lib/response');
const config = require('mysql2/promise')

// const mysql = require('mysql');
//API to get all locations
exports.getLocation = async (req,res)=>
{
    const con = await config.createConnection({
      host: "database-1.cdhjvbwqbfsh.us-east-1.rds.amazonaws.com",
      user: "admin",
      password: "password"
  });
  //var location=req.body.location;
  let ans=[];
  let result2 = await con.execute(` SELECT location FROM main.location `)
                  .then((res)=>{
                    
                    var RES=res[0];
                    //ans=RES;
                    //console.log(res[0]);
                    for(var i=0;i<RES.length;i++)
                    {
                        //console.log(RES[i]);
                        ans.push(RES[i].location);
                    }

                  })
                  .catch((err)=>{
                    console.log(err);
                  })
                  //console.log(ans);
                  res.json({"location":ans});
}