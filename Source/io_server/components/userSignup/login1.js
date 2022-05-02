const jwt = require("jsonwebtoken")

const bcrypt = require('bcrypt');
//const saltRounds = 10;
//const { useReducer } = require("react/cjs/react.production.min");

const login1 = async function(req,res){ 
    /*
    let user={
    "email":req.body.email.toLowerCase(),
    "password": req.body.password
    }  
    */
    const email= req.body.email;    
    const password = req.body.password;  
        
        dbPool.query('select * from user_table where email= ?',[email], async function (error, results, fields) {      
            console.log("inside query");
            if(error){
                console.log("after query 1st error");
                console.log(error);
                res.status(404).json({
                    "failed":"error occured",
                    "error":error
                })
            }
            
            else{
                console.log("inside else before length>0");
                if(results.length>0){
                const hashedPassword=results[0].password;      
                const comparison = await bcrypt.compare(password, hashedPassword);
                console.log("if results.lenght>0");
                if(comparison){
                    console.log("comparision");
                    const token=jwt.sign(
                        {
                        "user_id":results[0].user_id,
                        "email":results[0].email,
                        "user_points":results[0].user_points,
                        "user_type":results[0].user_type
                        },
                        "" + process.env.JWT_KEY,
                        //`${process.env.TOKEN_KEY}`,
                        {
                        expiresIn:"1h",
                        }
                    );
                    res.status(200).json({
                        "message":"user logged in successfully",
                        token:token,
                        "user_type":results[0].user_type
                    });

                }
                else{
                    console.log(error);
                    res.status(204).json({                 
                    //"code":204,                 
                    "failed":"email and password does not match",
                    "error":error            
                    })          
                    } 
            }
                else{
                    console.log("after length>0");
                    console.log(error);
                    res.status(400).json({
                        //"code":400,
                        "failed":"invalid credentials",
                        "error":error
                    });
                }
            }
           /*    
            if(comparison){
                    const token=jwt.sign(
                        {
                        user_id:results[0].user_id, 
                        email:results[0].email,
                        user_type: results[0].user_type
                        },
                        `${process.env.TOKEN_KEY}`,
                        {
                            expiresIn:"2h",
                        }
                    );
                    email.token=token;
                    console.log("user logged in successfully")
                    res.status(200).json({
                        "token":token,
                        "user_id":results[0].user_id,                
                        "email": results[0].email,                
                        "user_points": results[0].user_points
                    })
                }
                else{
                res.status(400).send("invalid credentials");
                console.log(error);
                }*/
        });  
}

module.exports=login1;