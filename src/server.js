// IMPORTANDO O MÓDULO EXPRESS 
const express = require('express')
// APP RECEBE O EXPRESS
const app = express()
// PERMITE QUE O SERVIDOR ENTENDA JSON NO CORPO DAS REQUISIÇÕES
app.use(express.json())

// EXPORTAR ROTAS
const login = require('./routes/RouterLogin') // IMPORTANDO A ROTA
app.use('/login', login)

// SUBINDO O SERVIDOR NA PORTA 3000
const PORT = 3000
app.listen(PORT, () => {
  console.log(`O servidor está rodando na porta ${PORT}`)
})




// CRIANDO UMA ROTA PARA A API
app.get('/home', (req, res) => {
  res.send('Hello World')
})











// // app.get('/states', (req, res) => {
// //     res.send({
// //         'Ceara': 10,
// //         'Bahia': 8,
// //         'Pernambuco': 7.78,
// //         ' Piauí': 6.4
// //     })
// // })

// // app.get('/shoes', (req, res) => {
// //     res.send([
// //         {
// //             nome: 'Puma Suede Classic',
// //             descricao: 'Tênis casual da Puma com acabamento em camurça, estilo retrô.',
// //             preco: 299,
// //             tamanho: 41
// //         },
// //         {
// //             nome: 'Puma RS-X',
// //             descricao: 'Tênis Puma com visual esportivo e design arrojado.',
// //             preco: 370,
// //             tamanho: 42
// //         },
// //         {
// //             nome: 'Puma Cali',
// //             descricao: 'Modelo Puma casual com solado robusto e estilo retrô.',
// //             preco: 320,
// //             tamanho: 40
// //         },
// //         {
// //             nome: 'Fila Disruptor II',
// //             descricao: 'Tênis Fila com solado grosso, estilo robusto e moderno.',
// //             preco: 270,
// //             tamanho: 41
// //         },
// //         {
// //             nome: 'Fila Original Fitness',
// //             descricao: 'Modelo clássico da Fila, com design esportivo e casual.',
// //             preco: 250,
// //             tamanho: 41
// //         },
// //         {
// //             nome: 'Fila Ray Tracer',
// //             descricao: 'Tênis Fila com estilo esportivo e design chunky.',
// //             preco: 290,
// //             tamanho: 42
// //         },
// //         {
// //             nome: 'Fila FX-100',
// //             descricao: 'Modelo Fila clássico com visual esportivo e confortável.',
// //             preco: 260,
// //             tamanho: 40
// //         },
// //         {
// //             nome: 'Fila V94M',
// //             descricao: 'Tênis Fila inspirado no estilo esportivo dos anos 90.',
// //             preco: 280,
// //             tamanho: 43
// //         },
// //         {
// //             nome: 'Puma Future Rider',
// //             descricao: 'Tênis Puma com conforto e visual inspirado nos anos 80.',
// //             preco: 330,
// //             tamanho: 43
// //         },
// //         {
// //             nome: 'Puma Smash V2',
// //             descricao: 'Tênis casual da Puma com design simples e conforto diário.',
// //             preco: 240,
// //             tamanho: 39
// //         }
// //     ]);
// // });



// // // SUBINDO O SERVIDOR NA PORTA 3000
// // const PORT = 3000


// // app.listen(PORT, () => {
// //     console.log(`O servidor está rodando na porta ${PORT}`)
// // })






// // EXERCÍCIO:

// // // CRIAR UMA FUNÇÃO DE LOGIN QUE RECEBA EMAIL E SENHA, SE FOREM IGUAIS AS VARIAVEIS JÁ DEFINIDAS, RETORNAR UM TOKEN. ESSE TOKEN DEVE SER USADO NA FUNÇÃO DE PRODUTOS, QUE SÓ MOSTRA OS PRODUTOS SE O TOKEN FOR IGUAL AO JÁ DEFINIDO NA FUNÇÃO.

// // RESPOSTA:

//

// const usuarios = [
//   { email: 'guilhermealvesfreitas@gmail.com', senha: '123456789' }
// ]

// const login = (email, senha) => {
//   try {
//     const usuario = (user => user.email === email);

//     if (usuario) {
//       return { success: false, message: 'Usuário nãp encontrado' };
//     }

//     if (usuario.senha === senha) {
//       const token = `token-${usuario.id}`;
//       return { success: true, token, message: `login realido com sucesso` };
//     } else {
//       return { success: false, message: `Senha incorreta` };
//     }
//   } catch (erro) {
//     console.error("Erro no processo de login", erro.message);
//     return { success: false, message: 'Erro no servidor' };
//   }
// };

// console.log(login('guilhermealvesfreitas@gmail.com', '123456789'));
// console.log(login('guilhermefreitalves@gmail.com', 'senhaErrada'));
// console.log(login('guilhermefreitalves123@gmail.com', 'senha123'));


// 1 CRIAR ROTA DE PRODUTOS
// 2 CRIAR ROTA DE LOGIN
// 3 CRIAR ROTA DE PRODUTOS CONTROLADA POR TOKEN


// const express = require('express');
// const app = express();
// const PORT = 3000;

// app.use(express.json());

// // criei um json dentro de um array
// const products = [
//   { id: 1, nome: 'produto A', preco: 100 },
//   { id: 2, nome: 'produto b', preco: 200 },
//   { id: 3, nome: 'produto c', preco: 300 }
// ]

// app.get('/produtos', (req, res) => {
//   res.json(products);
// });

// app.listen(PORT, () => {
//   console.log(`Servidor rodando na porta ${PORT}`);
// });

// app.get('/login', (req, res) => {
//   try {
//     const email = req.query.email
//     const senha = req.query.senha

//     const emailUser = 'gui@exemplo.com.br'
//     const senhaUser = '123456'

//     if (email === emailUser && senha === senhaUser) {
//       const jwt = require('jsonwebtoken')
//       const token = jwt.sign({ id: 1, name: 'Gui' }, '470218')

//       res.send({
//         'sucess': true,
//         'token':token,
//         'error': ''
//       })
//     } else {
//       res.send({
//         'sucess': true,
//         'token':'',
//         'error': 'usuário ou senha invalida'

//       });
//     };
//   }
// })