// return homepage
app.get('/',function(req,res){
    res.render('index');
});

// search function    
app.post('/search',function(req,res){
    var str = {
        stringPart:req.body.typeahead
    }

    db.query('SELECT city FROM hotel.hotel_table WHERE city LIKE "%'+str.stringPart+'%"',function(err, rows, fields) {
        if (err) throw err;
        var data=[];
        for(i=0;i<rows.length;i++)
        {
            data.push(rows[i].songTitle);
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