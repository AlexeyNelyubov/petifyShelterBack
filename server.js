const express = require('express')

const app = express()

PORT = 4000;

app.listen(PORT, 'localhost', (error)=> {
    error ? console.log(error) : console.log (`server listening port http://localhost:${PORT}`);
})

app.get ('/', (req, res)=> {
    res.json({msg: 'sdkjfhsdjk'})
})