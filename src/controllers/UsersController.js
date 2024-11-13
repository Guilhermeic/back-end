
const UserModel = require('../models/UserModel')

const UserCreate = async (req, res, next) => {
    try {

        const firstname = req.body.firstname
        const surname = req.body.surname
        const email = req.body.email
        const password = req.body.password

        // CRIPTOGRAFANDO A SENHA DO USUÁRIO PARA SALVAR NO BANCO
        const bcrypt = require('bcrypt')
        const saltRound = 10
        const hash = await bcrypt.hash(password, saltRound)


        const user = await UserModel.create({
            firstname: firstname,
            surname: surname,
            email: email,
            password: hash
        });


        res.status(201).send({
            'sucess': true,
            'message': `usuário cadastrado com sucesso! ID: ${user.id - user.name}`
        })
    } catch (error) {
        res.send({
            'sucess': false,
            'error': `erro na requisição ${error}`
        })
    }
}

const UserList = async (req, res, next) => {
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

const UserUpdate = async (req, res, next) => {
    try {
        const id = req.params.id
        const user = await UserModel.update(req.body, {
            where: { id }
        })

        res.status(201).send({
            'sucess': true,
            'message': `Usuário alterado com sucessso! ID: ${user.id - user.name}`
        })

    } catch (error) {
        res.send({
            'succes': false,
            'error': `erro na requisição ${error}`
        })
    }
}

const UserDelete = async (req, res, next) => {
    try {
        const id = req.params.id
        const user = await UserModel.destroy({
            where: { id }
        })

        res.status(200).send({
            'sucess': true,
            'message': `Usuário deletado com sucessso! ID: ${user.id - user.name}`
        })

    } catch (error) {
        res.send({
            'succes': false,
            'error': `erro na requisição ${error}`
        })
    }
}

module.exports = {
    UserCreate,
    UserList,
    UserUpdate,
    UserDelete
}