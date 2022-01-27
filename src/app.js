// Imports/Requires
import bodyParser from 'body-parser';
import express from 'express';
import UserRouter from "./Routes/users.js";
import config from "./config.js";

// Server Init
const app = express();
const appPort = config.port;
const appUrl = config.address;

// BodyParser Init
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', (req, res) => {
  res.json({
    info: 'This is an Trade Scheduler Server. Enjoy!'
  })
});

// Routers
app.use('/users', UserRouter);

app.set('domain', appUrl);
app.set('port', appPort);

// Port Listener
app.listen(appPort, appUrl, () => {
  console.log(`Server is running up at: ${appPort} in ${appUrl}!`);
});