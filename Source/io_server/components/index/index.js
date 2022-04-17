const serverConfig = require('./../serverConfig/serverConfig');

const express = require('express');
const app = express()

var createUser = require('./../userSignup/createUser');
var dbConnection = require('./../dbConfig/dbConnection');

app.get('/', (req, res)=>{
    res.send('Index');
});

//#### ROUTES DEFINED STARTS ####

app.use('/createUser', createUser);

//#### ROUTES DEFINED ENDS ####

app.listen(serverConfig.ioServer.port, ()=>{
    console.log('Server Running');
});