const res = require('express/lib/response');
const config = require('mysql2/promise')

// const mysql = require('mysql');
//CHANGE THE NUMBER OF ROOMS GIVEN A LOCATION
exports.deleteLocation = async (req,res)=>
{
    const con = await config.createConnection({
      host: "database-1.cdhjvbwqbfsh.us-east-1.rds.amazonaws.com",
      user: "admin",
      password: "password"
  });
  var location=req.body.location;
  //let ans={};
  
  let result = await con.execute(` DELETE from  main.Hotel  where  location='${location}'  `)
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
    {   res.status(400);
        return res.json({"status":result});
    }
    let result1 = await con.execute(`  DELETE from  main.location  where  location='${location}'  `)
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
          if(result1=="failure")
          {
            res.status(400);
          }
          con.close();
         res.json({"status":result1});
                 
}