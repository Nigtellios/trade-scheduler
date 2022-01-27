import { pool } from '../../Database/connect.js';

const deleteUser = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query('DELETE FROM users WHERE id = $1', [id], (err, results) => {
    if (err) {
      throw err;
    }
    res.status(200).send(`User with ID: ${id} has been deleted.`);
  });
}

export { deleteUser }