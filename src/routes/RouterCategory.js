const express = require('express')
const router = express.Router('')
const category = require('../controllers/CategoryController')


router.get('/', category.categoryList);
router.post('/', category.categoryCreate);
router.delete('/:id', category.categoryDelete);
router.put('/:id', category.categoryUpdate);

module.exports = router
