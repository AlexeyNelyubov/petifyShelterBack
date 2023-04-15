const mongoose = require('mongoose')
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')
const User = require('../models/UserModel.js');

const createToken = (_id) => {
    const accessToken = jwt.sign({_id}, process.env.ACCESS_SECRET, {expiresIn: '30m'});
    const refreshToken = jwt.sign({_id}, process.env.REFRESH_SECRET, {expiresIn: '30d'});
    console.log({accessToken})
    return {accessToken, refreshToken}
}

const signIn = async (req,res)=> {
    try {
        const user = await User.findOne({email: req.body.email});
        if (!user) { 
        return res.status(403).json("Неверно указан email")
        }

        const match = await bcrypt.compare(req.body.password, user.password)
        if (!match) { 
            return res.status(403).json("Неверно указан пароль")
            }
        const token = createToken(user._id)
        console.log(token.refreshToken)
        res.cookie('refreshToken', token.refreshToken, {maxAge: 30*24*60*60*1000, domain: 'localhost:5173', path: '/', httpOnly: true, sameSite:'none', secure:true})
        // return res.status(200).json({user, token: token.accessToken, cookie: token.refreshToken});
        return res.status(200).json({user, token: token.accessToken});
        // const findUserInDB = false;
        // const users = require('../user.json')
        // for (let user of users) {
        //     if (req.body.email === user.email && req.body.password === user.password) {
        //         return res.status(200).json(user);
        //     } 
        //     }
        //     if (!findUserInDB) {
        //         return res.status(401).json("Неверно указан email и пароль")
        //     }
        } 
        catch(error) {
        console.log(error.message);
        res.status(500).json(error.message)
        }
    
}

module.exports = {signIn}