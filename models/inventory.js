const mongoose = require('mongoose')

const inventorySchema = new mongoose.Schema({
    quantity: {
        type: Number,
        required: true
    },
    operation: {
        type: String,
        required: true
    }
})

const products = new mongoose.model("Product", inventorySchema)

module.exports = products;