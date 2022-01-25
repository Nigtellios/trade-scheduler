const { pool } = require('../../Database/connect');

const getUserById = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query('SELECT * FROM users WHERE id = $1', [id], (err, results) => {
    if (err) {
      throw err;
    }
    res.status(200).json(results.rows);
  });
}

module.exports = {
  getUserById
}