const http = require('http');
const router = require('./router.js');

require('dotenv').config();

const host = process.env.HOST;
const port = process.env.PORT;

const server = http.createServer(router);

server.listen(port);


console.log('server running on: http://' + host + ':' + port);

