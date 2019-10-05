const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')

// get todo model
const Todo = require('./todo')

// start server instance
const app = express()


// get server logs
app.use(morgan('dev'))

// use parser
app.use(bodyParser.json())


// connect to db
require('./connect')



// todo manipulation routes

// add 
app.post('/', async (req, res)=> {
    let response = { saved: false, errors: [], id: null }

    let { title, body } = req.body 

    let todo = await new Todo({ title, body }).save()
    if( !todo || !todo._id ) return res.json(response)

    response.saved = true 
    response.id = todo._id

    res.json(response)
})

// get details
app.get('/:id', async(req, res)=> {
    let response = { todo: {} }

    let todo = await Todo.findById(req.params.id)
    response.todo = todo

    res.json(response)
})

// get all
app.get('/', async(req, res)=> {
    let response = { todos: [] }

    let todos = await Todo.find()
    response.todos = todos

    res.json(response)
})



// start server
app.listen(14441, (error)=> {
    console.log(`started at post ${14441}`)
})