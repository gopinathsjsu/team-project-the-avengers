// search for hotels using city    
app.post('/search',function(req,res){
    var searchCity = req.body.search;

        let query= 'select city from hotel.hotel_table where city like "%'+searchCity+'%"';

    db.query(query, function(err,rows, fields) {
        if (err)
            throw "Error occured " + err;
        var data=[];
        for(i=0;i<rows.length;i++)
        {
            data.push(rows[i].city);
        }
        res.send(JSON.stringify(data));
    });
});
```
const router = require("express").Router();
const pool = require("../connection");

router.post("/hotelId",(req,res)=>{
    
    const hotelIdQuery = "select city from hotel_table;";

    pool.query(hotelIdQuery, [],(err,result)=>{
        console.log(result);
        res.status(200).json({location: result});
    });
});

module.exports = router;
```