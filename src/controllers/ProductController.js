// const { post } = require("../routes/RouterProducts");

const productList = async (req, res) => {

    res.send([
        {
            nome: 'Puma Suede Classic',
            descricao: 'Tênis casual da Puma com acabamento em camurça, estilo retrô.',
            preco: 299,
            tamanho: 41
        },
        {
            nome: 'Puma RS-X',
            descricao: 'Tênis Puma com visual esportivo e design arrojado.',
            preco: 370,
            tamanho: 42
        },
        {
            nome: 'Puma Cali',
            descricao: 'Modelo Puma casual com solado robusto e estilo retrô.',
            preco: 320,
            tamanho: 40
        },
        {
            nome: 'Fila Disruptor II',
            descricao: 'Tênis Fila com solado grosso, estilo robusto e moderno.',
            preco: 270,
            tamanho: 41
        },
        {
            nome: 'Fila Original Fitness',
            descricao: 'Modelo clássico da Fila, com design esportivo e casual.',
            preco: 250,
            tamanho: 41
        },
        {
            nome: 'Fila Ray Tracer',
            descricao: 'Tênis Fila com estilo esportivo e design chunky.',
            preco: 290,
            tamanho: 42
        },
        {
            nome: 'Fila FX-100',
            descricao: 'Modelo Fila clássico com visual esportivo e confortável.',
            preco: 260,
            tamanho: 40
        },
        {
            nome: 'Fila V94M',
            descricao: 'Tênis Fila inspirado no estilo esportivo dos anos 90.',
            preco: 280,
            tamanho: 43
        },
        {
            nome: 'Puma Future Rider',
            descricao: 'Tênis Puma com conforto e visual inspirado nos anos 80.',
            preco: 330,
            tamanho: 43
        },
        {
            nome: 'Puma Smash V2',
            descricao: 'Tênis casual da Puma com design simples e conforto diário.',
            preco: 240,
            tamanho: 39
        }
    ]);

}

// const productCreate = async (req, res) => {
//     const { nome, descricao, preco, tamanho } = req.body;

//     if (!nome || !descricao || !preco || !tamanho) {
//         return res.status(400).send({ error: 'Todos os campos são obrigatórios' });
//     }

//     const newProduct = {
//         nome,
//         descricao,
//         preco,
//         tamanho,
//     };

//     res.status(201).send({
//         message: 'Produto criado com sucesso',
//         product: newProduct,
//     });
// }

const productCreate = async ( req,res,next) => {
    try{
        const nome = req.body.nome
        const preco = req.body.marca
        const tamanho = req.body.tamanha
        const descricao = req.body.descricao

        res.send({
            'sucess': true,
            'message': 'produto cadastrado com sucesso'
        })
    } catch (error){
        res.send({
            'sucess': false,
            'error': `erro na requisição ${error}`
        })
    }
}

module.exports = {
    productList,
    productCreate
};

