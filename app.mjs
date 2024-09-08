import express from 'express'
import path from 'path';
import router from './routes/index.mjs'
import logRequests from './utils/logger.mjs'
import ejs from 'ejs';

const PORT = 3000
const app = express()

app.use(express.static(path.join(process.cwd(), 'public')));

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json());
app.use(logRequests);
app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
