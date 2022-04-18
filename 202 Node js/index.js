
var express = require('Express');
const { price_calculate } = require('./price_calculate');
var app = express();
var {query} = require("./select_q")
var things = require('./things.js');

app.use(express.json());
//both index.js and things.js should be in same directory
app.post('/search', query);

app.post('/price', price_calculate);

app.listen(3000);