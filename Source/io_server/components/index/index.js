const serverConfig = require('./../serverConfig/serverConfig');
const path = require('path');

const express = require('express');
const app = express()
app.use(express.json());

var userSignup = require('./../userSignup/router');
var admin = require('./../admin/router');
global.dbPool = require('./../dbConfig/dbConnection');

var signup = require('./../userSignup/router');


// app.get('/', (req, res)=>{
//     res.send('Index');
// });

app.use('/', express.static(path.join(__dirname, '..', '..', '..', 'web_ui', 'build'))); // -Faizali
// app.use(express.static(path.join(__dirname, '..', '..', '..', 'web_ui', 'build')));  // -Amy
// app.get('*', function(req, res) {
//   res.sendFile(path.join(__dirname, '..', '..', '..', 'web_ui', 'build', 'index.html'));
// });
//#### ROUTES DEFINED STARTS ####

app.use('/userSignup', userSignup);
app.use('/signup', userSignup);
app.use('/admin', admin);

//#### ROUTES DEFINED ENDS ####

app.listen(serverConfig.ioServer.port, ()=>{
    console.log('Server Running');
});