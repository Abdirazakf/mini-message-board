const { Router } = require('express')
const path = require('path')
const indexRouter = Router()

const messages = [
    {
        text: "Hi, there!",
        user: "Amando",
        added: new Date()
    },
    {
        text: "Hello, World!",
        user: "Charles",
        added: new Date()
    }
]

indexRouter.get('/', (req, res) => {
    res.render("index", {title: "Message Board", messages: messages})
})

indexRouter.get('/new', (req,res) => {
    res.render("form")
})

indexRouter.post('/new', (req,res) => {
    messages.push({text: req.body.message, user: req.body.author, added: new Date()})
    res.redirect('/')
})

indexRouter.get('/message/:id', (req, res) => {
    const id = parseInt(req.params.id)

    if (id >= 0 && id < messages.length) {
        res.render('message', {message: messages[id]})
    } else {
        res.status(404).send("Message not found")
    }
})

module.exports = indexRouter