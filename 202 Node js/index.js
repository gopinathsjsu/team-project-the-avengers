
var express = require('Express');
const { get_Rooms } = require('./getRooms');
const { price_calculate } = require('./price_calculate');
const { changeRoomno } = require('./changeRoomno');
var app = express();
var {query} = require("./select_q")
var things = require('./things.js');

app.use(express.json());
//both index.js and things.js should be in same directory
app.post('/search', query);

app.post('/price', price_calculate);
app.post('/getRooms', get_Rooms);
app.post('/changeRoomno',changeRoomno);
app.listen(3000);