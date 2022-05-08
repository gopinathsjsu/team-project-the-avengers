const res = require('express/lib/response');
var nodemailer = require('nodemailer');
const emailerConfig = require('./emailerConfig');

const sendAccountCreatedEmail = function(req, res){
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
        to: "faizalimulla@gmail.com",
        subject: "Email Config",
        text: "Set correctly"
      };
      
    
      transporter.sendMail(message, function(error, info){
        if(error){
            res.send(error);
        }
        else{
            res.send(info.response);
        }
      });
}

module.exports = sendAccountCreatedEmail;

//{firstname, lastname, email, res}