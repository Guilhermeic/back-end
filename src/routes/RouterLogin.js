
const express = require('express')
const router = express.Router/*modulo de rotas*/()
const LoginController = require('../controllers/LoginController')

router.post('/', LoginController.Login)
// router.get('/', LoginController.Login)
// router.delete('/', LoginController.Login)
// router.put('/', LoginController.Login)

module.exports = router

