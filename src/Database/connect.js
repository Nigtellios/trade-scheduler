const { db_user, db_host, db_name, db_password, db_port } = require('../../config');

const Pool = require('pg').Pool;
const pool = new Pool({
  user: db_user,
  host: db_host,
  database: db_name,
  password: db_password,
  port: db_port,
});

module.exports = {
  pool
}