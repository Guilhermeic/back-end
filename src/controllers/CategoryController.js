const categoryCreate = async (req, res, _next) => {
    try {
        const name = req.body.name
        const slug = req.body.slug
        const use_in_menu = req.body.use_in_menu
        
        const user = await UserModel.create({
            name:name,
            slug: slug,
            use_in_menu: use_in_menu,
            
        });


        res.send({
            'sucess': true,
            'message':  `categoria cadastrado com sucesso!`
        })
    } catch (error) {
        res.send({
            'sucess': false,
            'error': `erro na requisição ${error}`
        })
    }
}

const categoryList = async (req, res, next) => {
    console.log('asuag')
    try {
        res.send([
            {
                
            },
        ])

    } catch (error) {
        res.send({
            'success': false,
            'error': `erro na requisicao ${error}`

        })

    }

}

const categoryUpdate = async (req, res, next) => {
    try {
        const id = req.params.id
        const user = await UserModel.update(req.body, {
            where: { id }
        })

        res.status(201).send({
            'sucess': true,
            'message': `categoria alterado com sucessso! ID: ${user.id - user.name}`
        })

    } catch (error) {
        res.send({
            'succes': false,
            'error': `erro na requisição ${error}`
        })
    }
}

const categoryDelete = async (req, res, next) => {
    try {
        const id = req.params.id
        const user = await UserModel.destroy({
            where: { id }
        })

        res.status(200).send({
            'sucess': true,
            'message': `categoria deletado com sucessso! ID: ${user.id - user.name}`
        })

    } catch (error) {
        res.send({
            'succes': false,
            'error': `erro na requisição ${error}`
        })
    }
}


module.exports = {
    categoryList,
    categoryCreate,
    categoryDelete,
    categoryUpdate
}