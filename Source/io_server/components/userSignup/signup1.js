const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require("jsonwebtoken");

const signup1 = async function(req,res){    
    const password = req.body.password;    
    const encryptedPassword = await bcrypt.hash(password, saltRounds)
        let users={       
        "email":req.body.email.toLowerCase(),    //sanitize data    
        "password":encryptedPassword,
        "firstname":req.body.firstName,
        "lastname":req.body.lastName,
        "phone":req.body.phone
        }        
        dbPool.query('INSERT INTO user_table SET ?',users, function (error, results, fields) {      
        if (error) {        
        res.send({          
            "code":400,          
            "failed":"error occurred",          
            "error" : error
            })      
        } 
        else {
            const token = jwt.sign(
                { email: users.email },
                "" + process.env.JWT_KEY,
                {
                  expiresIn: "1h",
                }
              );
            users.token=token;
            res.send({          
            "code":200,          
            "success":"user registered sucessfully"            
            });        
        }    
    });  
}

module.exports=signup1;