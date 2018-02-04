const Note = require('../../db').Note

const route = require('express').Router()

route.get('/', (req, res) => {
    Note.findAll()
        .then((notes) => {
            res.status(200).send(notes)
        })
        .catch((err) => {
            res.status(500).send({
                error: "could not retrieve notes"
            })
        })
})

route.post('/', (req, res) => {
    Note.create({
        title: req.body.title,
        content: req.body.content
    }).then((notes) => {
        res.status(201).send(notes)
    }).catch((err) => {
        res.status(501).send({
            error: "Error adding Notes"
        })
    })
})

exports = module.exports = route