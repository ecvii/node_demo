const mongoose = require('mongoose')

var orderSchema = new mongoose.Schema({
    status: {
        type: String,
        required: true
    },
    note: {
        type: String,
        required: true
    },
    productOrder: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Products'
    }]
})

//module.exports = mongoose.model('Orders', orderSchema)
mongoose.model('Orders', orderSchema)