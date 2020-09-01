const jwt = require('jsonwebtoken')
const blogsRouter = require('express').Router()
const Blog = require('../models/blog')
const User = require('../models/user')

blogsRouter.get('/', async (request, response) => {
    const blogs = await Blog.find({})

    response.json(blogs)
   
  })

  
  blogsRouter.post('/', async (request, response) => {

    const decodedToken = jwt.verify(request.token, process.env.SECRET)
    if (!request.token || !decodedToken.id) {
      return response.status(401).json({ error: 'token missing or invalid' })
    }
    const user = await User.findById(decodedToken.id)


    const blog = new Blog({
      ...request.body,
      user: user._id
    })

    const savedBlog = await blog.save();
    user.blogs = user.blogs.concat(savedBlog._id)

    await user.save()

    response.json(savedBlog)
  
    blog
      .save()
      .then(result => {
        response.status(201).json(result)
      })
  })

  blogsRouter.delete('/', async (request, response) => {
    const {title} = request.body


    const decodedToken = jwt.verify(request.token, process.env.SECRET)
    if (!request.token || !decodedToken.id) {
      return response.status(401).json({ error: 'token missing or invalid' })
    }

    const user = await User.findById(decodedToken.id)
    
    const blog = await Blog.findOne({title})

    if(blog.user.toString() === user.id.toString()){
        blog.remove()
        response.status(204).send()
    }

  })
  
  module.exports = blogsRouter;