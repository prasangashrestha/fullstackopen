const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const blogsRouter = require('./controllers/blogs')
const morgan = require('morgan')

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('connected to MongoDB')
    })
    .catch(error => {
        console.error('error connecting: ', error.message)
    })

app.use(cors())
app.use(express.json())

app.use(morgan('tiny'))

app.use('/api/blogs', blogsRouter)

module.exports = app