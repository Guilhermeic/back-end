// IMPORTANDO O MÓDULO EXPRESS 
const express = require('express')
// APP RECEBE O EXPRESS
const app = express()
// PERMITE QUE O SERVIDOR ENTENDA JSON NO CORPO DAS REQUISIÇÕES
app.use(express.json())
// CRIANDO UMA ROTA PARA A API
app.get('/home', (req, res) => {
    res.send('Hello World')
})

app.get('/states', (req, res) => {
    res.send({
        'Ceara': 10,
        'Bahia': 8,
        'Pernambuco': 7.78,
        ' Piauí': 6.4
    })
})

app.get('/shoes', (req, res) => {
    res.send([
        {
            nome: 'Nike Air Max 360',
            descricao: 'Tênis Nike com excelente amortecimento e design moderno.',
            preco: 265,
            tamanho: 42
        },
        {
            nome: 'Adidas Ultraboost',
            descricao: 'Modelo Ultraboost com solado de espuma para máximo conforto.',
            preco: 450,
            tamanho: 40
        },
        {
            nome: 'Puma Suede Classic',
            descricao: 'Tênis casual da Puma com acabamento em camurça, estilo retrô.',
            preco: 299,
            tamanho: 41
        },
        {
            nome: 'Converse Chuck Taylor All Star',
            descricao: 'Clássico All Star de cano baixo, ideal para o dia a dia.',
            preco: 199,
            tamanho: 43
        },
        {
            nome: 'Vans Old Skool',
            descricao: 'Tênis Vans com estilo skate clássico e durabilidade.',
            preco: 280,
            tamanho: 39
        },
        {
            nome: 'New Balance 574',
            descricao: 'Tênis confortável e estiloso, ideal para uso casual.',
            preco: 320,
            tamanho: 42
        },
        {
            nome: 'Asics Gel-Kayano 27',
            descricao: 'Tênis de corrida Asics com sistema de gel para alta performance.',
            preco: 500,
            tamanho: 41
        },
        {
            nome: 'Mizuno Wave Prophecy',
            descricao: 'Modelo de alta tecnologia para suporte e amortecimento.',
            preco: 750,
            tamanho: 44
        },
        {
            nome: 'Reebok Classic Leather',
            descricao: 'Tênis casual Reebok de couro, com design clássico.',
            preco: 230,
            tamanho: 40
        },
        {
            nome: 'Fila Disruptor II',
            descricao: 'Tênis Fila com solado grosso, estilo robusto e moderno.',
            preco: 270,
            tamanho: 41
        }
    ]);
});


// SUBINDO O SERVIDOR NA PORTA 3000
const PORT = 3000


app.listen(PORT, () => {
    console.log(`O servidor está rodando na porta ${PORT}`)
})