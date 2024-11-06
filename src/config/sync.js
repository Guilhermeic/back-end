const connection = require('./database/connection') // importando aconexão com o banco

require('../models/UserModel') // 

connection.sync({ alter: true }) // permite alterações (alter: true)