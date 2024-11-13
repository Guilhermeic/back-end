const express = require('express')
const router = express.Router()
const category = require('../controllers/AddressController')

router.get('/', category.addressList);
router.post('/', category.addressCreate);

module.exports = router