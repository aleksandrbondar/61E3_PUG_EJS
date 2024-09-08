import users from './../data/users.json' assert { type: 'json' };
const getUsersHandler = (req, res) => {
  res.render('users', { users });
}

const postUsersHandler = (req, res) => {
  res.send('POST users route')
}

const getUserByIdHandler = (req, res) => {
  const { userId } = req.params
  res.render('userById', { user: users[userId - 1] })
}

const deleteUserByIdHandler = (req, res) => {
  const { userId } = req.params
  res.send(`DELETE user by id: ${userId}`)
}

const putUserByIdHandler = (req, res) => {
  const { userId } = req.params
  res.send(`PUT user by id route with id: ${userId}`)
}

export { getUsersHandler, postUsersHandler, getUserByIdHandler, deleteUserByIdHandler, putUserByIdHandler }
