
var createUser = function(req, res){
    var query1 = `INSERT INTO user_table (username, email, password, firstname, lastname, phone) VALUES("${req.body.userName}", "${req.body.email}", "${req.body.password}", "${req.body.firstName}", "${req.body.lastName}", "${req.body.phone}")`;
    dbPool.query(query1, (error, results, fields) => {
        if (error){
            res.send("ERROR");
        }
        else{
            res.send("ACKNOWLEDGEMENT");
        }
    });
}

module.exports = createUser;