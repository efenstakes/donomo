const mongoose = require('mongoose')


// allow `findOneAndUpdate()` and `findOneAndDelete()` to work
mongoose.set('useFindAndModify', false)

const connect = async ()=> {
    let connection 

    try{
        connection = await mongoose.connect('mongodb://mongo:27017/donomo', { useNewUrlParser: true })
        console.log('connected to db')
    }catch(e){
        console.log('error connecting to db')
    }

    return connection
}

let connection = connect()
module.exports = connection