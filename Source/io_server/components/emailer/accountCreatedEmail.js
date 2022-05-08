var nodemailer = require('nodemailer');
const emailerConfig = require('./emailerConfig');

const sendAccountCreatedEmail = function({req, res, firstname, lastname, email}){
    var transporter = nodemailer.createTransport({
        host: emailerConfig.host,
        port: emailerConfig.port,
        secure: emailerConfig.secure,
        auth: {
          user: emailerConfig.auth.user,
          pass: emailerConfig.auth.pass
        },
        tls:{
            rejectUnauthorized: emailerConfig.tls.rejectUnauthorized
        }
      });
      
      var message = {
        from: "faizali@justopensourceit.com",
        to:  email,
        subject: "Account Created",
        html:  `<div style="font-family:arial"><h2>Thank you ${firstname} for creating an account with us.  We hope that you enjoy your stay!<h2></div>
        <br>
        <div>
        <h3>
        Best Regards,<br>
        Avengers Hotel
        </h3>
        </div>`
      };
      
    
      transporter.sendMail(message, function(error, info){
        if(error){
            console.log(error);
        }
      });
}

module.exports = sendAccountCreatedEmail;