const express = require('express');
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;
const app = express()

app.get('/',(req, res)=>{
    res.send(`hi my name is naim sheikh`)
})

app.listen(port, ()=>{
    console.log(`port is running on serve ${port}`);
})