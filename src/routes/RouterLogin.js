
const express = require('express')
const router = express.Router/*modulo de rotas*/()
const LoginController = require('../controllers/LoginController')

router.post('/', LoginController.Login)
router.get('/', LoginController.Login)
router.delete('/:id', LoginController.Login)
router.put('/:id', LoginController.Login)

module.exports = router

