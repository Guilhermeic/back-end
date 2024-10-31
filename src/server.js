// // // IMPORTANDO O MÓDULO EXPRESS 
// // const express = require('express')
// // // APP RECEBE O EXPRESS
// // const app = express()
// // // PERMITE QUE O SERVIDOR ENTENDA JSON NO CORPO DAS REQUISIÇÕES
// // app.use(express.json())
// // // CRIANDO UMA ROTA PARA A API
// // app.get('/home', (req, res) => {
// //     res.send('Hello World')
// // })

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

const usuarios = [
{email: 'guilhermefreitalves@gmail.com', senha: '12345678'},
{email: 'guilhermealvesfreitas@gmail.com', senha: '12345678'}
]

const login = (email, senha) => {
  try {
    const usuario = usuarios.find(user => user.email === email);

    if(!usuario) {
      return{success: false, message: 'Usuário nãp encontrado'};
    }

    if(usuario.senha === senha) {
      const token = `token-${usuario.id}-${Date.now()}`;
      return{success: true, token, message: `login realido com sucesso`};
    }else{
      return{success: false, message: `Senha incorreta`};
    }
  }catch(erro) {
    console.error("Erro no processo de login",erro.message);
    return{success: false, message: 'Erro no servidor'};
  }
} ;

console.log(login('guilhermefreitalves@gmail.com', '12345678'));
console.log(login('guilhermefreitalves@gmail.com', 'senhaErrada'));
console.log(login('guilhermefreitalves123@gmail.com', 'senha123'));