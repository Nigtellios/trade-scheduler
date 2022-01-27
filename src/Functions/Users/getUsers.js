import { pool } from '../../Database/connect.js';

const getUsers = (req, res) => {
  pool.query('SELECT * FROM users ORDER BY id ASC', null,(err, results) => {
    if (err) {
      throw err;
    }
    res.status(200).json(results.rows);
  });
}

export { getUsers }