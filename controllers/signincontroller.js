const signIn = (req,res)=> {
    try {
        const findUserInDB = false;
        const users = require('../user.json')
        for (let user of users) {
            if (req.body.email === user.email && req.body.password === user.password) {
                return res.status(200).json(user);
            } 
            }
            if (!findUserInDB) {
                return res.status(401).json("Неверно указан email и пароль")
            }
        } 
        catch(error) {
        console.log(error.message);
        res.status(500).json(error.message)
        }
    
}

module.exports = {signIn}