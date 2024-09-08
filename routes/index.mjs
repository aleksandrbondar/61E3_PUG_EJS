import { Router } from 'express'
import rootRouter from './root.mjs'
import usersRouter from './users.mjs'
import articlesRouter from './articles.mjs'
import errorHandler from '../utils/error.mjs'
import articleRouter from './article.mjs'

const router = Router()

router.use('/', errorHandler, rootRouter)
router.use('/users', errorHandler, usersRouter)
router.use('/articles', errorHandler, articlesRouter)
router.use('/article', errorHandler, articleRouter)
router.use('*', (req, res) => res.status(404).end('Not found'))

export default router
