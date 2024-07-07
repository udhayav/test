const express = require("express")
const router = express.Router()
const {getProduct, getSingleProduct, saveProduct, updateProduct, deleteProduct} = require('../controller/product.controller.js')

// get all product 
router.get('/', getProduct)

// get specific product
router.get('/:id', getSingleProduct)

// save product
router.post('/', saveProduct)

// update product 
router.put('/:id', updateProduct)

// delete product 
router.delete('/:id', deleteProduct)



module.exports = router