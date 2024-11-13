const express = require('express')
const router = express.Router()
const product = require('../controllers/ProductController')
const users = require('../controllers/UsersController')
const UsersController = require('../controllers/UsersController')
const UsersValidation = require('../middleware/UsersValidation')

router.get('/', users.UserList);
router.post('/', UsersValidation.UserCreateValidation, UsersController.UserCreate);
router.put('/:id',users.UserUpdate);
router.delete('/:id', users.UserDelete);

module.exports = router
