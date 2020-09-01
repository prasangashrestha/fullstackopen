const { request } = require("express")

const tokenExtractor = function(request, response, next) {

    const authorization = request.get('authorization')
    console.log(authorization)
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
         
        request.token = authorization.substring(7)
    
    }
    next();
}
module.exports = tokenExtractor