const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UsersModel = require('./models/user.model');
const port = process.env.PORT || 5000;
const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://Naim:Naim123@curd.gploutp.mongodb.net/your_database_name?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});



app.get('/',(req, res)=>{
    res.send(`hi my name is naim sheikh`)
})

app.post("/creatUser", (req, res)=>{
    UsersModel.create(req.body )
    .then(users => res.json(users))
    .then(err => res.json(err))
})

app.listen(port, ()=>{
    console.log(`port is running on serve ${port}`);
})