const res = require('express/lib/response');
const config = require('mysql2/promise')

// const mysql = require('mysql');
//CHANGE THE NUMBER OF ROOMS GIVEN A LOCATION
exports.changeAmenities = async (req,res)=>
{
    const con = await config.createConnection({
      host: "database-1.cdhjvbwqbfsh.us-east-1.rds.amazonaws.com",
      user: "admin",
      password: "password"
  });
 
  var amenity_price= req.body.amenity_price;
  var amenity_id=req.body.amenity_id;
 
  
  let result = await con.execute(` UPDATE  main.Amenities SET amenity_price='${amenity_price}' where amenity_id ='${amenity_id}' `)
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