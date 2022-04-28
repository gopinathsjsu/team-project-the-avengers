
var addLocation = function(req, res){
    var locationQuery = `INSERT INTO location (location, King_Suite, Queen_Suite, Junior_Suite, Queen_Deluxe) VALUES("${req.body.location}", "${req.body.King_Suite}", "${req.body.Queen_Suite}", "${req.body.Junior_Suite}", "${req.body.Queen_Deluxe}")`;
    dbPool.query(query1, (error, results, fields) => {
        if (error){
            res.send("ERROR");
        }
        else{
            res.send("ACKNOWLEDGEMENT");
        }
    });
}

module.exports = addLocation;