
const express = require('express')
const router = express.Router('')
const product = require('../controllers/ProductController')

// router.post('/', ProductController.product)
router.get('/', product) 

// router.delete('/', LoginController.Login)
// router.put('/', LoginController.Login)

module.exports = router

