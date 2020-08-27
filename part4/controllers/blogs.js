const blogsRouter = require('express').Router()
const Blog = require('../models/blog')
console.log('yess')

blogsRouter.get('/', (request, response) => {
    console.log('yess')
    Blog
      .find({})
      .then(blogs => {
          console.log('yes')
        response.json(blogs)
      })
      .catch((err) => console.error(err))
  })
  
  blogsRouter.post('/', (request, response) => {
    const blog = new Blog(request.body)
  
    blog
      .save()
      .then(result => {
        response.status(201).json(result)
      })
  })
  
  module.exports = blogsRouter;