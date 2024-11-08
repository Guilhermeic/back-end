const addressCreate = async (req, res, _next) => {
    try {
        const name = req.body.name
        const slug = req.body.slug
        const use_in_menu = req.body.use_in_menu
        
        const address = await UserModel.create({
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

const addressList = async (req, res, next) => {
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

module.exports = {
    addressList,
    addressCreate
}