require('dotenv').config();

const express = require('express');
const appRouter = require('./routes/index.js')

const app = express()

app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.path, req.method);
next();
})

app.use ('/api/v1', appRouter);

app.listen(process.env.PORT, 'localhost', (error)=> {
    error ? console.log(error) : console.log (`server listening port http://localhost:${process.env.PORT}`);
})
