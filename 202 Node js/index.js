
var express = require('Express');
const { get_Rooms } = require('./getRooms');
const { price_calculate } = require('./price_calculate');
const { changeRoomno } = require('./changeRoomno');
const { createBooking } = require('./createBooking');
const { getLocation} = require('./getLocation');
const { viewBookings} = require('./viewBookings');
const { deleteBookings} = require('./deleteBookings');

var app = express();
var {query} = require("./select_q")
var things = require('./things.js');

app.use(express.json());
//both index.js and things.js should be in same directory
app.post('/search', query);

app.post('/price', price_calculate);
app.post('/getRooms', get_Rooms);
app.post('/changeRoomno',changeRoomno);
app.post('/createBooking',createBooking);
app.get('/getLocation',getLocation);
app.post('/viewBookings',viewBookings);
app.post('/deleteBookings',deleteBookings);
app.listen(3000);