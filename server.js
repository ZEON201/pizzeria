require('dotenv').config()
const https = require('https');
const app = require('./index.js');
const server = https.createServer(app)
server.listen(process.env.PORT)
