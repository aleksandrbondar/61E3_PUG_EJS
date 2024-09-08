import { Router } from 'express'
import {
  deleteUserByIdHandler,
  getUserByIdHandler,
  getUsersHandler,
  postUsersHandler,
  putUserByIdHandler
} from '../controllers/users.mjs'
import validateUserInput from '../utils/validateUserInput.mjs'

const usersRouter = Router()

usersRouter.route('/')
  .get(getUsersHandler)
  .post(validateUserInput, postUsersHandler)

usersRouter
  .route('/:userId')
  .get(getUserByIdHandler)
  .put(validateUserInput, putUserByIdHandler)
  .delete(deleteUserByIdHandler)

export default usersRouter
