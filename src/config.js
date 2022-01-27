import dotenv from 'dotenv';
dotenv.config();

const config = {
  port: process.env.APP_PORT,
  address: process.env.APP_URL,
  db_user: process.env.DB_USER,
  db_host: process.env.DB_HOST,
  db_name: process.env.DB_NAME,
  db_password: process.env.DB_PASSWORD,
  db_port: process.env.DB_PORT
}

export default config;