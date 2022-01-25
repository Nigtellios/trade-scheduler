// Imports/Requires
const { port } = require('../config');
const bodyParser = require('body-parser');
const express = require('express');
const { user } = require("./Routes/User/routes");

// Server Init
const app = express();
const appPort = port;

// BodyParser Init
const initBodyParser = () => {
  app.use(bodyParser.json());
  app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );
}

initBodyParser();

const displayHome = () => {
  app.get('/', (req, res) => {
    res.json({
      info: 'This is an Trade Scheduler Server. Enjoy!'
    })
  });
}

displayHome();

// Routes
app.get('/users', user.getUsers);
app.get('/users/:id', user.getUserById);
app.post('/users', user.createUser);
app.put('/users/:id', user.updateUser);
app.delete('/users/:id', user.deleteUser);

// Port Listener
app.listen(appPort, () => {
  console.log(`Server is running up at: ${appPort}!`);
});