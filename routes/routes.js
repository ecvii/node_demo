const express = require('express');
const { default: mongoose } = require('mongoose');
const router = express.Router()
const Products = mongoose.model('Products')
const Orders = mongoose.model('Orders')
//const productModel = require('../models/products')
//const orderModel = require('../models/orders')

//!Products add
router.post('/product/add', async (req, res) => {
    const data = new Products({
        productName: req.body.productname,
        productPrice: req.body.productprice,
        productQuantity: req.body.productquantity
    })

    try {
        const savedata = await data.save()
        res.status(200).json(savedata)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

//!Orders add
router.post('/order/add', async (req, res) => {
    const data = new Orders({
        status: req.body.status,
        note: req.body.note,
        productOrder: req.body.productorder
    })

    try {
        const savedata = await data.save()
        res.status(200).json(savedata)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

//!Get all products 
router.get('/product/list', async (req, res) => {
    try{
        const data = await Products.find()
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//!Get all orders
router.get('/order/list', async (req, res) => {
    try{
        const data = await Orders.find().populate('productOrder', '-_id -__v')
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//!Get product by ID 
router.get('/product/:id', async (req, res) => {
    try{
        const data = await Products.findById(req.params.id)
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//!Get order by ID
router.get('/order/:id', async (req, res) => {
    try{
        const data = await Orders.findById(req.params.id).populate('productOrder', '-_id -__v')
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//!Update product by ID 
router.patch('/product/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Products.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//!Update order by ID
router.patch('/order/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Orders.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//!Delete product by ID
router.delete('/product/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Products.findByIdAndDelete(id)
        res.send(`Product ${data.productName} has been deleted.`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//!Delete order by ID
router.delete('/order/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Orders.findByIdAndDelete(id)
        res.send(`Order with product number ${data.productOrder} has been deleted.`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

module.exports = router;