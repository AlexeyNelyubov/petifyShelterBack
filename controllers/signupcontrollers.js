const fs = require('fs')

const SignUp = async (req, res) => {
    try{
        console.log(req.body)
        const {firstName, lastName, email, city} = req.body;
        const user = {
            firstName,
            lastName,
            email,
            city,
        }
        const users = await fs.promises.readFile('user.json')
        if (!users.length){
            const jsonUsers = []
            jsonUsers.push(user);
            const data = JSON.stringify(jsonUsers, null, 2)
            await fs.promises.writeFile('user.json', data);
            res.status(200).json(user)
        } else {
            const jsonUsers = JSON.parse(users);
            for( let jsonUser of jsonUsers) {
                if (jsonUser.email === user.email) {
                    throw new Error ('Пользователь с таким email уже существует')
                }
            }
            jsonUsers.push(user);
            await fs.promises.truncate('user.json');
            const data = JSON.stringify(jsonUsers, null, 2)
            await fs.promises.writeFile('user.json', data);
            res.status(200).json(user)
        }
        
        
    }catch(error) {
        console.error(error.massage);
        res.status(500).json(error.message)
    
}
}

module.exports = {SignUp}