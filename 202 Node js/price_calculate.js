const res = require('express/lib/response');
const config = require('mysql2/promise')

// const mysql = require('mysql');

exports.price_calculate = async (req,res)=>
{
    const con = await config.createConnection({
      host: "database-1.cdhjvbwqbfsh.us-east-1.rds.amazonaws.com",
      user: "admin",
      password: "password"
  });
  //the request body should have room_type,room_no,location, amenities, no_of guest, start_date,end_date

  /*var room_type='King_Suite';
  
  var location='San Jose';
  var start_date=new Date('2022-04-14');

  console.log(start_date.getDay());
  var end_date=new Date('2022-04-16');
  var no_of_guests=0;*/
  //Till this it is from the request body
  var room_type=req.body.room_type;
  var location=req.body.location;
  var start_date=new Date(req.body.start_date);
  var end_date=new Date(req.body.end_date);
  var amenities_id=req.body.amenities;
  var no_of_guests=req.body.no_of_guests;
  var price=0;
  var cost_mul=1.0;
  var weekend_rate=1.0;
  var season_rate=1.0;
  var from_date;
  var to_date;
  var amemities=0.0;
  let result = await con.execute(` SELECT * FROM main.Hotel where location ='${location}' `)
                  .then((res)=>{
                    //console.log(res[0][0]);
                    var RES=res[0][0];
                    //console.log(RES.location)
                    cost_mul=RES.multiplier;
                    weekend_rate=RES.weekend_rate;
                    season_rate=RES.season_rate;
                    from_date=RES.from_date;
                    to_date=RES.to_date;
                    
                    //console.log(res[0][0].keys);
                    /*for(var i in res[0][0])
                    {
                        console.log(res[0][0][i]);
                    }*/
                  })
                  .catch((err)=>{
                    console.log(err);
                  })
    
    //con.close();
    
   console.log(from_date);
   console.log(cost_mul);

   let result1 = await con.execute(` SELECT * FROM main.Room where room_type ='${room_type}' `)
                  .then((res)=>{
                    var RES=res[0][0];
                    price=price+RES.member+(RES.guest*no_of_guests);
                    price=price*cost_mul;
                    //write code here for weekend and season dates and number of days
                    if(from_date!=null)
                    {
                         console.log("Festival season is here!!");
                    }
                    else
                    {
                        var d1 =  start_date;
                        var d2 = end_date;
                        var no_of_weekend=0;
                        var no_of_days=0;
                        while (d1 <= d2) {
                            no_of_days++;
                            var day = d1.getDay();
                            console.log(day);
                            isWeekend = (day === 6) || (day === 0); 
                            if (isWeekend) { no_of_weekend++; } // return immediately if weekend found
                            d1.setDate(d1.getDate() + 1);
                        }
                        price=(price*(no_of_days-no_of_weekend))+(price*no_of_weekend*weekend_rate);
                        console.log("number of weekends"+no_of_weekend);

                    }

                  })
                  .catch((err)=>{
                    console.log(err);
                  })

    let result2 = await con.execute(` SELECT * FROM main.Amenities  `)
                  .then((res)=>{
                    var RES=res[0];
                    //console.log(RES[0])
                    //write code for getting the amount of each kind of amenties.
                    for(var id=0;id<amenities_id.length;id++)
                    {
                      amemities+=RES[amenities_id[id]-1].amenity_price;
                    }

                  })
                  .catch((err)=>{
                    console.log(err);
                  })

 
con.close();
price+=amemities;
console.log("PRICE IS"+price); 
res.json({'price'  : price });   
   
}

//price_calculate();