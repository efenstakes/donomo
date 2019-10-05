const mongoose = require('mongoose')

const TodoSchema = mongoose.Schema({

    title: {
        type: String,
        required: true  
    },

    body: {
        type: String, 
        required: true 
    },

    added_on: {
        type: Date,
        default: Date.now()
    }

})

const Todo = mongoose.model('Todo', TodoSchema)

module.exports = Todo