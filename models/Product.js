const{ Schema, model } = require('mongoose')

const Product = new Schema({
    header:{
        tupe: String,
        required: true
    },
    price:{
        tupe: Number,
       
    },
    image: {
        tupe: String,
       
    }
})
module.exports = model('Product' , Product)