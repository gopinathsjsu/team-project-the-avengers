const serverConfig = require('./../serverConfig/serverConfig');
const path = require('path');

const express = require('express');
const app = express()
app.use(express.json());

var userSignup = require('./../userSignup/router');
global.dbPool = require('./../dbConfig/dbConnection');

// app.get('/', (req, res)=>{
//     res.send('Index');
// });

// app.use('/', express.static(path.join(__dirname, '..', '..', '..', 'web_ui', 'build')));
app.use(express.static(path.join(__dirname, '..', '..', '..', 'web_ui', 'build')));  // -Amy
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '..', '..', '..', 'web_ui', 'build', 'index.html'));
});
//#### ROUTES DEFINED STARTS ####

app.use('/userSignup', userSignup);

//#### ROUTES DEFINED ENDS ####

app.listen(serverConfig.ioServer.port, ()=>{
    console.log('Server Running');
});