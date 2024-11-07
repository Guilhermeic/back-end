const express = require('express')
const router = express.Router('')
const category = require('../controllers/CategoryController')

// router.post('/', ProductController.product)
router.get('/', category.categoryList);
router.post('/', category.categoryCreate);

// router.delete('/', LoginController.Login)
// router.put('/', LoginController.Login)

module.exports = router
