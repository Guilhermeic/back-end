const connection = require('./database/connection') // importando aconexão com o banco

require('../models/UserModel') 
require('../models/CategoryModel')
require('../models/AddressModel')

connection.sync({alter: true})
