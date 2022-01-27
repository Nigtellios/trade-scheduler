import { pool } from '../../Database/connect.js';

const updateUser = (req, res) => {
  const id = parseInt(req.params.id);
  const { name, tag, slug } = req.body;

  pool.query(
    'UPDATE users SET name = $1, tag = $2, slug = $3 WHERE id = $4',
    [name, tag, slug, id],
    (err, results) => {
      if (err) {
        throw err;
      }
      res.status(200).send(`User with ID: ${id} has been modified.`);
    }
  )
}

export { updateUser }