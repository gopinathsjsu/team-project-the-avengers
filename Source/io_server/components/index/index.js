const serverConfig = require('./../serverConfig/serverConfig');

const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send('Hey');
});

app.listen(serverConfig.ioServer.port, ()=>{
    console.log('Server Running');
});