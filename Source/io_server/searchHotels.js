const router = require("express").Router();
const pool = require("../connection");

router.post("/hotelId",(req,res)=>{
    
    const hotelIdQuery = "select location from hotel;";

    pool.query(hotelIdQuery, [],(err,result)=>{
        console.log(result);
        res.status(200).json({location: result});
    });
});

module.exports = router;