import config from '../config.js';
import pg from 'pg';

const pool = new pg.Pool({
  user: config.db_user,
  host: config.db_host,
  database: config.db_name,
  password: config.db_password,
  port: config.db_port,
});

export { pool }