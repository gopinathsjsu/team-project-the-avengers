/*
Use the req.user that you set in verifyToken in the new middleware. 
Query the db using that user_id value and check if the user_role is ‘admin’. 
If it is, return next(), else an error status code. 
You can choose either of one of this way and then add it to index.js.
 If you are using the second way, make sure to use isAuth before it

*/
//import verifyToken from "../userSignup/auth";

var user=require('./../userSignup/auth');

const admin_auth1 = async (req, res, next)=>{


var user_id=req.user;

    dbPool.query('select * from user_table where user_id=?', [user_id], async function (err, res, fields){
        if(err){
            res.status(404).json({
                "failed":"error occured",
                "error":err
            })
        }
        else{
            if(user_type==="admin"){
                res.status(200).json({
                    "message":"welcome admin"
                });
            }
            else{
                res.status(401).json({
                    "failed":"Failed",
                    "error":err
                });
            }
        }
    })

}

module.exports=admin_auth1;