const User = require('../../db').User

const route = require('express').Router()

route.get('/', (req, res) => {

    User.findAll()
        .then((users) => {
            res.status(200).send(users)
        })
        .catch((err) => {
            res.status(500).send({
                error: "could not retrieve users"
            })
        })
})

route.post('/', (req, res) => {
    User.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname
    }).then((users) => {
        res.status(201).send(users)
    }).catch((err) => {
        res.status(501).send({
            error: "could not add users"
        })
    })
})

exports = module.exports = route