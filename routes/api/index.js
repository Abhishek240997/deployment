const route = require('express').Router()

route.use('/users', require('./users'))
route.use('/notes', require('./notes'))

exports = module.exports ={
    route
}