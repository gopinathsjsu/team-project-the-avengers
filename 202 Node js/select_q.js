// const res = require('express/lib/response');
//const req = require('express/lib/request');
const config = require('mysql2/promise')

// const mysql = require('mysql');

exports.query = async (req,res)=>
{
    const con = await config.createConnection({
      host: "database-1.ca9ddimducmq.us-east-2.rds.amazonaws.com",
      user: "admin",
      password: "password"
  });

  /*var start_date='2022-04-28';
  var end_date='2022-04-30';
  var location='San Jose';
  var room_type='A';*/
  var start_date=req.body.start_date;
  var end_date=req.body.end_date;
  var location=req.body.location;
  var room_type=req.body.room_type;
  const rooms=1;//Make a DB call here to get rooms value for the room_type
  var selected_room=-1;
  for(var no=1;no<=rooms;no++)
  {
    //var sql = 'SELECT * FROM main.Bookings WHERE room_no=? and location=? and room_type=? and (start_date <= ? and end_date>= ?)';

    let result = await con.execute(`SELECT * FROM main.Bookings WHERE room_no=${no} and location='${location}' and room_type='${room_type}' and (start_date <= '${end_date}' and end_date>= '${start_date}')`)
                  .then((res)=>{
                    if(res[0].length==0)
                    {
                      selected_room=no;
                      
                    }
                  })
                  .catch((err)=>{
                    console.log(err);
                  })
   
  }
  
  if(selected_room==-1)
  {
    console.log("room is NOT available");
  }
  else{
    console.log("Room is available")
  }
  con.close()
  res.json({'room_no'  : selected_room });
}



//query();