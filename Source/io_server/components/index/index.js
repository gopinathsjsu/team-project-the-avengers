const serverConfig = require('./../serverConfig/serverConfig');

const express = require('express');
const app = express()

var userSignup = require('./../userSignup/router');
global.dbPool = require('./../dbConfig/dbConnection');

// app.get('/', (req, res)=>{
//     res.send('Index');
// });

app.use('/s', express.static('./../build/index.html'));

//#### ROUTES DEFINED STARTS ####

app.use('/userSignup', userSignup);

//#### ROUTES DEFINED ENDS ####

app.listen(serverConfig.ioServer.port, ()=>{
    console.log('Server Running');
});