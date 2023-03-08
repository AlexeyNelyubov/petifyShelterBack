require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const cors = require('cors')
const appRouter = require('./routes/index.js')

const app = express()

app.disable("x-powered-by");

app.use(express.json())

app.use('/img', express.static('./img'));

app.use(cors({
    origin: process.env.FRONT_URL,
    methods: ['GET', 'POST'],
    allowedHeaders: ["Content-Type"],
    credentials: false,
    maxAge: 60
}))

// app.use((req,res,next)=>{
//     console.log(req.path, req.method);
// next();
// })

app.use(morgan('dev'))

app.use ('/api/v1', appRouter);

app.listen(process.env.PORT, 'localhost', (error)=> {
    error ? console.log(error) : console.log (`server listening port http://localhost:${process.env.PORT}`);
})
