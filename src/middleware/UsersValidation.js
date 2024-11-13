const bcrypt = require('bcrypt')
const UserCreateValidation = (req, res, next) => {
    try {

        // const firstname = req.body.firstname
        // const surname = req.body.surname
        // const email = req.body.email
        // const password = req.body.password

        const { firstname, surname, email, password } = req.body

        if (!firstname || !surname || !email || !password) {
            const message = 'firstname, surname, email, password são obrigatórios'
            return res.status(400).json({
                sucess: false,
                message: `Erro: ${error}`
            })
        }
        next()

    } catch (error) {
        return res.status(400).json({
            sucess: false,
            message: `Erro: ${error}`
        })
    }
}

function IsEmail(email){
    var exclude=/[^@.\-w]|^[_@.-]|[._-]{2}|[@.]{2}|(@)[^@]*1/;
    var check=/@[w-]+./;
    var checkend=/.[a-zA-Z]{2,3}$/;
    if(((email.search(exclude) != -1)||(email.search(check)) == -1)||(email.search(checkend) == -1)){return false;}
    else {return true;}
}


module.exports = {
    UserCreateValidation
}