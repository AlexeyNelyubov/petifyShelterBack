require('dotenv').config();

const express = require('express');
const petsRouter = require('./routes/Pets.js')

const app = express()

app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.path, req.method);
next();
})
/app.use ('/api/pets', petsRouter);

app.listen(process.env.PORT, 'localhost', (error)=> {
    error ? console.log(error) : console.log (`server listening port http://localhost:${process.env.PORT}`);
})
