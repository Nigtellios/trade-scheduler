const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  port: process.env.APP_PORT,
  url: process.env.APP_URL
};