const{ Schema, model } = require('mongoose')

const Product = new Schema({
    header:{
        tupe: String,
        required: true
    },
    price:{
        tupe: String,
        required: true
    },
    image: {
        tupe: String,
        required: true
    }
})
module.exports = model('Product' , Product)