const serverConfig = require('./../serverConfig/serverConfig');

const express = require('express');
const app = express()

var createUser = require('./../userSignup/createUser');
var dbConnection = require('./../dbConfig/dbConnection');
var addLocation = require('./../adminStuff/addLocation');


app.get('/', (req, res)=>{
    res.send('Index');
});

//#### ROUTES DEFINED STARTS ####

app.use('/createUser', createUser);
app.use('/addLocation', addLocation);

//#### ROUTES DEFINED ENDS ####

app.listen(serverConfig.ioServer.port, ()=>{
    console.log('Server Running');
});