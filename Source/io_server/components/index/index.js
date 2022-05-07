const serverConfig = require('./../serverConfig/serverConfig');
const path = require('path');
require("dotenv").config();

const express = require('express');
const app = express()
app.use(express.json());

// const authMiddleware = require('../middleware/auth')


var userSignup = require('./../userSignup/router');
var admin = require('./../admin/router');
global.dbPool = require('./../dbConfig/dbConnection');
const isAuth = require("./../userSignup/auth");


var signup = require('./../userSignup/router');
const { get_Rooms } = require('./../../202 Node js/getRooms');
const { get_Hotels } = require('./../../202 Node js/getHotels');
const { price_calculate } = require('./../../202 Node js/price_calculate');
const { changeHotel } = require('./../../202 Node js/changeHotel');
const { insertLocation } = require('./../../202 Node js/insertLocation');
const { changeRoomno } = require('./../../202 Node js/changeRoomno');
const { deleteLocation } = require('./../../202 Node js/deleteLocation');
const { createBooking } = require('./../../202 Node js/createBooking');
const { getLocation} = require('./../../202 Node js/getLocation');
const { viewBookings} = require('./../../202 Node js/viewBookings');
const { deleteBookings} = require('./../../202 Node js/deleteBookings');
var {query} = require("./../../202 Node js/select_q")


// app.get('/', (req, res)=>{
//     res.send('Index');
// });

// app.use('/', express.static(path.join(__dirname, '..', '..', '..', 'web_ui', 'build'))); // -Faizali
app.use(express.static(path.join(__dirname, '..', '..', '..', 'web_ui', 'build')));  // -Amy
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '..', '..', '..', 'web_ui', 'build', 'index.html'));
});
//#### ROUTES DEFINED STARTS ####

app.use('/userSignup', userSignup);
app.use('/signup', userSignup);
app.use('/admin', admin);

app.post('/search', query);
app.post('/price', isAuth,price_calculate);
app.post('/getRooms', get_Rooms);
app.post('/getHotel', get_Hotels);
app.post('/changeRoomno',changeRoomno);
app.post('/createBooking',createBooking);
app.post('/changeHotel',changeHotel);
app.post('/insertLocation',insertLocation);
app.post('/getLocation',getLocation);
app.post('/deleteLocation',deleteLocation);
app.post('/viewBookings', isAuth, viewBookings);
app.post('/deleteBookings',isAuth,deleteBookings);

//#### ROUTES DEFINED ENDS ####

app.listen(serverConfig.ioServer.port, ()=>{
    console.log('Server Running');
});