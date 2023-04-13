require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser')
const fileUpload = require('express-fileupload')
const appRouter = require('./routes/index.js')

const app = express()

app.use(cookieParser())

app.use(fileUpload({}))

app.disable("x-powered-by");

app.use(express.json())

app.use('/img', express.static('./img'));

app.use(cors({
    origin: [process.env.FRONT_URL, process.env.FRONT_URL_GITPG],
    methods: ['GET', 'POST'],
    allowedHeaders: ["Content-Type"],
    credentials: true,
}))

app.use(morgan('dev'))

app.use ('/api/v1', appRouter);

mongoose.connect(`${process.env.MONGO_URI}`)
    .then(()=> {
        app.listen(process.env.PORT, 'localhost', (error)=> {
            error ? console.log(error) : console.log (`connected to DB & server listening port http://localhost:${process.env.PORT}`);
            //         error ? console.log(error) : console.log (`connected to DB & server listening port http://127.0.0.1:${process.env.PORT}`);
        })
    })

    .catch((error)=>{console.log(error)});
