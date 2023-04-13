const fs = require('fs')
const mongoose = require('mongoose')
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')
const User = require('../models/UserModel.js')

const createToken = (_id) => {
    const accessToken = jwt.sign({_id}, process.env.ACCESS_SECRET, {expiresIn: '30m'});
    const refreshToken = jwt.sign({_id}, process.env.REFRESH_SECRET, {expiresIn: '30d'});
    return {accessToken, refreshToken}
}

const SignUp = async (req, res) => {
    const {firstName, lastName, email, city, password} = req.body;
    try{
        if(!/^\S+@\w{2,}\.\w{2,3}$/.test(email)) {
            return res.status(403).json("The email is not valid")
        }
        if(!/^\S{8,64}$/.test(password)) {
            return res.status(403).json("The password is not valid")
        }
        const exists = await User.findOne({email})

    if(exists) {
        return res.status(403).json('Пользователь с таким email уже существует');
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const user = await User.create({firstName, lastName, email, city, password:hash});
    console.log(user)
    const token = createToken(user._id)
    return res.status(200).json({user, token})
   
        
        // const users = await fs.promises.readFile('user.json')
        // if (!users.length){
        //     const newUsers = []
        //     newUsers.push(user);
        //     const jsonNewUsers = JSON.stringify(newUsers, null, 2)
        //     await fs.promises.writeFile('user.json', jsonNewUsers);
        //     return res.status(200).json(user)
        // } else {
        //     const newUsers = JSON.parse(users);
        //     for( let newUser of newUsers) {
        //         if (newUser.email === user.email) {
        //             return res.status(401).json('Пользователь с таким email уже существует')
        //         }
        //     }
        //     newUsers.push(user);
        //     await fs.promises.truncate('user.json');
        //     const jsonNewUsers = JSON.stringify(newUsers, null, 2)
        //     await fs.promises.writeFile('user.json', jsonNewUsers);
        //     return res.status(200).json(user)
        // }
        
        
    }
    catch(error) {
        console.error(error.message);
        res.status(500).json(error.message) 
    }
}

module.exports = {SignUp}