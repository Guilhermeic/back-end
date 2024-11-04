const Login = async (req, res, next) => {
    try {
        const email = req.body.email
        const senha = req.body.senha

        const emailUser = ' gui@exemplo.com'
        const senhaUser = '123456'
        if (email === emailUser && senha ===  senhaUser) {
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