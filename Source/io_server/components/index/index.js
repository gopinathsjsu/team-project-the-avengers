const serverConfig = require('./../serverConfig/serverConfig');
const path = require('path');
require("dotenv").config();

const express = require('express');
const app = express()
app.use(express.json());

// const authMiddleware = require('../middleware/auth')


var userSignup = require('./../userSignup/router');
//var admin = require('./../admin/router');
const hotelPromo = require("./../hotelPromo/router");

global.dbPool = require('./../dbConfig/dbConnection');
const isAuth = require("./../userSignup/auth");

const admin = require('./../admin-visva/admin_auth');

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
const { getPriceTable} = require('./../../202 Node js/getPriceTable');
const { changePriceTable} = require('./../../202 Node js/changePriceTable');
const { getAmenities} = require('./../../202 Node js/getAmenities');
const { changeAmenities} = require('./../../202 Node js/changeAmenities');
var {query} = require("./../../202 Node js/select_q");
const res = require('express/lib/response');
const { editReservation } = require('./../../202 Node js/editReservation')
const { updateReservation } = require('./../../202 Node js/updateReservation')

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
// app.use('/admin', admin);
app.use('/hotelPromo', hotelPromo);

//app.use('/admin', admin);
//app.post('/admin', isAuth, admin_auth1);
app.post('/search', query);
app.post('/price', isAuth,price_calculate);
app.post('/createBooking', isAuth, createBooking);
app.post('/getLocation',getLocation);
app.post('/viewBookings', isAuth, viewBookings);
app.post('/deleteBookings',isAuth,deleteBookings);
app.post('/editReservation', isAuth, editReservation);
app.post('/updateReservation', isAuth, updateReservation);

// admin routes
app.post('/getHotel', isAuth, admin, get_Hotels);
app.post('/changeHotel', isAuth, admin, changeHotel);
app.post('/insertLocation', isAuth, admin, insertLocation);
app.post('/deleteLocation', isAuth, admin, deleteLocation);
app.post('/getRooms', isAuth, admin, get_Rooms);
app.post('/changeRoomno', isAuth, admin, changeRoomno);
app.post('/getPriceTable', isAuth, admin, getPriceTable);
app.post('/changePriceTable', isAuth, admin, changePriceTable);
app.post('/getAmenities', isAuth, admin, getAmenities);
app.post('/changeAmenities', isAuth, admin, changeAmenities);
//#### ROUTES DEFINED ENDS ####

app.listen(serverConfig.ioServer.port, ()=>{
    console.log('Server Running');
});