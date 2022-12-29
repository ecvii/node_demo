const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: 'This field is required',
    },
    productPrice: {
        type: Number,
        required: 'This field is required'
    },
    productQuantity: {
        type: Number,
        required: 'This field is required'
    }
})

//module.exports = mongoose.model('Products', productSchema)
mongoose.model('Products', productSchema)