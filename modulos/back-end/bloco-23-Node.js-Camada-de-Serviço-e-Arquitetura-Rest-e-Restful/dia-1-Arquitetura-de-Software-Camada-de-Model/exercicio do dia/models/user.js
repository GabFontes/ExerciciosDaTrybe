const connection = require('./connection');

const createUser = async ({ firstName, lastName, email, password }) => {
  const [{ insertId }] = await connection.execute(`INSERT INTO users_crud.users
  (first_name, last_name, email, password) VALUES (?, ?, ?, ?)`,
    [firstName, lastName, email, password]);
  return {
    id: insertId,
    firstName,
    lastName,
    email,
  }
};

const getAllUsers = async () => {
  const [users] = await connection.execute('SELECT * FROM users_crud.users')
  return users;
}


const getUserById = async (id) => {
  const [user] = await connection.execute('SELECT * FROM users_crud.users WHERE id = ?', [id]);
  if (user.length === 0) {
    return {
      error: true,
      message: "Usuário não encontrado"
    }
  }
  return user;
}

const editUser = async ({ id, firstName, lastName, email, password }) => {
  await connection.execute(
    `UPDATE users_crud.users
    SET first_name = ?, last_name = ?, email = ?, password = ?
    WHERE id = ?`, [firstName, lastName, email, password, id]
  )
  const user = await getUserById(id);
  return user
}

const deleteUser = async (id) => {
  await connection.execute('DELETE FROM users_crud.users WHERE id = ?', [id]);
}

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  editUser,
  deleteUser,
};
