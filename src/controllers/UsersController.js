
const userCreate = async (req, res, next) => {
    try {
        const nome = req.body.nome
        const email = req.body.email
        const senha = req.body.senha

        res.send({
            'sucess': true,
            'message': 'usuário cadastrado com sucesso'
        })
    } catch (error) {
        res.send({
            'sucess': false,
            'error': `erro na requisição ${error}`
        })
    }
}

const userList = async (req, res, next) => {
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