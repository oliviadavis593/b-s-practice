require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const { NODE_ENV } = require('./config') 
const errorHandler = require('./errorHandler')
const validateBearerToken = require('./validateBearerToken')
const bookmarksRouter = require('./bookmarks/bookmarks-router')
const BookmarksService = require('./bookmarks-service')

const app = express()

const morganOption = (NODE_ENV === 'production')
  ? 'tiny'
  : 'common';

app.use(morgan(morganOption))
app.use(helmet())
app.use(cors())
app.use(validateBearerToken)

app.use(bookmarksRouter)

app.get('/bookmarks', (req, res, next) => {
  const knexInstance = req.app.get('db')
  BookmarksService.getAllArticles(knexInstance)
    .then(bookmarks=> {
      res.json(bookmarks)
    })
    .catch(next)
})

app.get('/', (req, res) => {
    res.send('Hello, world!')
})

app.use(errorHandler)

module.exports = app; 