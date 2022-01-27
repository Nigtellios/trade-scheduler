import { pool } from '../../Database/connect.js';

const createUser = (req, res) => {
  const { name, tag, slug } = req.body;

  pool.query('INSERT INTO users (name, tag, slug) VALUES ($1, $2, $3)', [name, tag, slug], (err, results) => {
    if (err) {
      throw err;
    }
    res.status(200).send(`User added with ID: ${results.insertId}`);
  });
}

export { createUser }