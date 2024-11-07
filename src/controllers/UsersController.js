
const UserModel = require('../models/UserModel')

const userCreate = async (req, res, next) => {
    try {
        const firstname = req.body.firstname
        const surname = req.body.surname
        const email = req.body.email
        const password = req.body.password

        const user = await UserModel.create({
            firstname: firstname,
            surname: surname,
            email: email,
            password: password
        });


        res.status(201).send({
            'sucess': true,
            'message':  `usuário cadastrado com sucesso! ID: ${user.id - user.name}`
        })
    } catch (error) {
        res.send({
            'sucess': false,
            'error': `erro na requisição ${error}`
        })
    }
}

const userList = async (req, res, next) => {
    console.log('asuag')
    try {
        res.send([
            {
                nome: 'Guilerme',
                email: 'guilerme@gmail.com',
                senha: 'tantantan'
            },
        ])

    } catch (error) {
        res.send({
            'success': false,
            'error': `erro na requisicao ${error}`

        })

    }

}

module.exports = {
    userCreate,
    userList
}