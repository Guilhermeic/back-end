UserController.js
const Login = async (req, res, next) => {
    const email = 'david@exemplo.com.br'
    const password = '123456'

    
}

module.exports = {
    Login
}



EXERCÍCIO:

CRIAR UMA FUNÇÃO DE LOGIN QUE RECEBA EMAIL E SENHA, SE FOREM IGUAIS AS VARIAVEIS JÁ DEFINIDAS, RETORNAR UM TOKEN. ESSE TOKEN DEVE SER USADO NA FUNÇÃO DE PRODUTOS, QUE SÓ MOSTRA OS PRODUTOS SE O TOKEN FOR IGUAL AO JÁ DEFINIDO NA FUNÇÃO.

RESPOSTA:

const login = (email, senha) => {
  
    const Useremail = 'thiago.arruda.09@hotmail.com';
    const Usersenha = 'thiago123'
    const token = {"result": true, "token": '123456', "message": 'Deu bom!'}
  
  if (Useremail === email && Usersenha === senha){
    console.log(token)
  }
  else{
    console.log({"result": false, "token": '', "message": 'Deu ruim!'})
  }
  }

  // login('thiago.arruda.09@hotmail.com','sdds')
  
  const produtos = async(token) => {
      const data =
        [{
         nome:'sapato nike1',
         preço:300
        },
        {
         nome:'sapato nike2',
         preço:400
        },
        {
         nome:'sapato nike3',
         preço:500
        }]

      if (token == 123456){
        console.log({"result": true, "products": data, "message": 'Deu bom!'})
      }  else{
        console.log({"result": false, "products": [], "message": 'Deu ruim!'})
    }
  }

  produtos('1234567')