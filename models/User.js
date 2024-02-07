const{ Schema, model } = require('mongoose')

const User = new Schema({
    login:{
        tupe: String,
        uniqued: true,
        required: true
    },
    password:{
        tupe: String,
        required: true
    },
    email: {
        tupe: String,
        required: true
    }
})
module.exports = model('User' , User)