
var express = require('Express');
var app = express();
var {query} = require("./select_q")
var things = require('./things.js');

app.use(express.json());
//both index.js and things.js should be in same directory
app.post('/things', query);

app.listen(3000);