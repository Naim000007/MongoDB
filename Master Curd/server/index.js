const express = require('express');
const { MongoClient } = require('mongodb');
require('colors')

const app = express()

const port = process.env.PORT || 5000;
const uri ='mongodb+srv://Naim:Naim123@curd.gploutp.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri)

async function run(){
   try {
    await client.connect();
    console.log(`mongoDB connected`.cyan.bold);

    const Product = client.db('foodPanda').collection('products')
    const User = client.db('foodPanda').collection('users')

    Product.insertOne({name: "Pizza"});

   } catch (error) {
    console.log(error.name.red, error.message.bold.red); 
   }
}
run()



app.listen(port , ()=>{
    console.log(`app is running on ${port}`.cyan.bold);
})