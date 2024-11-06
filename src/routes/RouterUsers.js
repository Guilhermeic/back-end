const express = require('express')
const router = express.Router('')
const product = require('../controllers/ProductController')
const users = require('../controllers/UsersController')

// router.post('/', ProductController.product)
router.get('/', users.userList);
router.post('/', users.userCreate);

// router.delete('/', LoginController.Login)
// router.put('/', LoginController.Login)

module.exports = router