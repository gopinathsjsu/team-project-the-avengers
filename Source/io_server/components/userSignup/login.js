const bcrypt = require('bcrypt');
//const saltRounds = 10;

const login = async function(req,res){ 
    const email= req.body.email;    
    const password = req.body.password;    
        
        dbPool.query('select * from user_table where email= ?',[email], async function (error, results, fields) {      
            if (error) {   
                console.log(error);     
                res.send({          
                "code":400,          
                "failed":"error occurred",          
                "error" : error        
            })      
            }
            else{        
                if(results.length>0){  
                console.log(results);  
                const hashedPassword=results[0].password      
                const comparison = await bcrypt.compare(password, hashedPassword)          
            
                if(comparison){ 
                    console.log(results);              
                res.send({                
                "code":200,                
                "success":"login successful",                
                "email": results[0].email,                
                "user_points": results[0].user_points            
                })          
                }
                else{
                console.log(error);
                res.send({                 
                "code":204,                 
                "error":"Email and password does not match"            
                })          
                }        
                } 
                else{          
                res.send({            
                "code":206,            
                "error":"Email does not exist"              
                });        
                }      
            }      
        });  
}
module.exports=login;