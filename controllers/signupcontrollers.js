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
            const newUsers = []
            newUsers.push(user);
            const jsonNewUsers = JSON.stringify(newUsers, null, 2)
            await fs.promises.writeFile('user.json', jsonNewUsers);
            res.status(200).json(user)
        } else {
            const newUsers = JSON.parse(users);
            for( let newUser of newUsers) {
                if (newUser.email === user.email) {
                    throw new Error ('Пользователь с таким email уже существует')
                }
            }
            newUsers.push(user);
            await fs.promises.truncate('user.json');
            const jsonNewUsers = JSON.stringify(newUsers, null, 2)
            await fs.promises.writeFile('user.json', jsonNewUsers);
            res.status(200).json(user)
        }
        
        
    }catch(error) {
        console.error(error.massage);
        res.status(500).json(error.message)
    
}
}

module.exports = {SignUp}