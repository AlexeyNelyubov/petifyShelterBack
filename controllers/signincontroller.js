const signIn = (req,res)=> {
    try {
        console.log(req.params.email)
        const findUserInDB = false;
        const users = require('../user.json')
        for (let user of users) {
            if (req.params.email === user.email && req.params.password === user.password) {
                res.status(200).json(user);
                break;
            } 
            }
            if (!findUserInDB) {
                throw new Error ("Неверно указан email и пароль")
            }
        } catch(error) {
        console.log(error.message);
        res.status(500).json(error.message)
    }
    
}

module.exports = {signIn}