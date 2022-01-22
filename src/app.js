// Imports/Requires
const { port } = require('../config');
const express = require('express');

// Server Init
const app = express();
const appPort = port;

app.get('/', function(req, res) {
  res.send('Hello World!')
});

app.listen(appPort, function() {
  console.log(`Example app listening on port ${appPort}!`)
});

console.log(`Your port is ${appPort}`);