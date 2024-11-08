const userModel = require('../models/UserModel')

const Login = async (req, res, next) => {
    try {
        const email = req.body.email
        const senha = req.body.senha

        //RETORNANDO UM USUÁRIO COM O EMAIL INFORMADO
        const bcrypt = require('bcrypt')
        const user = await userModel.findOne({
            where: { email }
        })

        console.log(user

        )

        const userPassword = user ? user.password : ''
        const hashValid = await bcrypt.compare(senha, userPassword)



        if (hashValid) {
            const jwt = require('jsonwebtoken')
            const token = jwt.sign({ id: 1, name: 'Gui' }, '470218')

            res.send({
                'sucess': true,
                'token': token,
                'error': ''
            })
        } else {
            res.send({
                sucess: true,
                token: '',
                error: 'Email e senha inválidos!'
            })
        }

        const emailUser = ' gui@exemplo.com'
        const senhaUser = '123456'

    } catch (error) {
        res.sen({
            'sucess': false,
            'token': '',
            'error': `Erro na requisição: ${error}`
        })
    }
}

module.exports = {
    Login
}