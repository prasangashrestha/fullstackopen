const { init } = require("../models/blog")

const dummy = (blogs) => {
    return 1
}

const totalLikes = blogs => {
    const reducer = (accum, item) => {
        return  accum + item.likes
    }

    return blogs.reduce(reducer, 0)
}

const favoriteBlog = blogs => {
    return blogs.reduce( (prev, next) => {
        return next.likes>prev.likes ?  next : prev   
    })
}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog
}