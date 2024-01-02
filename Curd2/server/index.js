const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UsersModel = require('./models/user.model');
const port = process.env.PORT || 5000;
const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://Naim:Naim123@curd.gploutp.mongodb.net/your_database_name?retryWrites=true&w=majority");



app.get('/',(req, res)=>{
    UsersModel.find({})
    .then(users=> res.json(users))
    .catch(err => res.json(err))
})

app.post("/creatUser", (req, res)=>{
    console.log("Request Body:", req.body);
    UsersModel.create(req.body )
    .then(users => res.json(users))
    .catch(err => res.json(err))

})

app.listen(port, ()=>{
    console.log(`port is running on serve ${port}`);
})