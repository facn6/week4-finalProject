const http = require('http');
const router = require('./router.js');

require('dotenv').config();

const host = process.env.HOST;
const port = process.env.PORT || 4000;

const server = http.createServer(router);

server.listen(port, function (error){
    if(error)
    {
        console.log("ERROR ,CANT RUN THE SERVER");
    }
    else{
    console.log('server running on: http://' + host + ':' + port);
    }
});

module.exports = server;
