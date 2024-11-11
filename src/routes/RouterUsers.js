const express = require('express')
const router = express.Router('')
const product = require('../controllers/ProductController')
const users = require('../controllers/UsersController')


router.get('/', users.userList);
router.post('/', users.userCreate);
router.put('/:id',users.UserUpdate);
router.delete('/:id',users.UserDelete);

module.exports = router
