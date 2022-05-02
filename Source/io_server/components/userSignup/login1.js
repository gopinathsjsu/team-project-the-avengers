const jwt = require("jsonwebtoken")

const bcrypt = require('bcrypt');
//const saltRounds = 10;
//const { useReducer } = require("react/cjs/react.production.min");

const login1 = async function(req,res){ 
    let user={
    "email": req.body.email.toLowerCase(),  
    "password": req.body.password
    }   
        
        dbPool.query('select * from user_table where email= ?',user.email, async function (error, results, fields) {      
           
                if(await bcrypt.compare, user.password){
                    const token=jwt.sign(
                        {
                        user_id:user.user_id, 
                        email:user.email,
                        user_type: user.user_type
                        },
                        `${process.env.TOKEN_KEY}`,
                        {
                            expiresIn:"2h",
                        }
                    );
                    user.token=token;
                    console.log("user logged in successfully")
                    res.status(200).json({
                        "token":token,
                        "user_id":user.user_id,                
                        "email": user.email,                
                        "user_points": user.user_points
                    })
                }
                else{
                res.status(400).send("invalid credentials");
                console.log(error);
                }
        });  
}

module.exports=login1;