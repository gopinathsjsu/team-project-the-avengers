const res = require('express/lib/response');
var nodemailer = require('nodemailer');

const sendAccountCreatedEmail = function(req, res){
    var transporter = nodemailer.createTransport({
        host: "sg3plcpnl0015.prod.sin3.secureserver.net", //TBC
        port: 587,
        secure: false, // upgrade later with STARTTLS
        auth: {
          user: "faizali@justopensourceit.com", //TBC
          pass: "E[Hxj1_5_Z-C", //TBC
        },
        tls:{
            rejectUnauthorized: false
        }
      });
      
      var message = {
        from: "faizali@justopensourceit.com",
        to: "faizalimulla@gmail.com",
        subject: "Test Message",
        text: "Hey"
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