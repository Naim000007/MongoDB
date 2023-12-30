const express = require("express");
const { MongoClient } = require("mongodb");
require("colors");
const cors = require('cors');


const app = express();

app.use(express.json());
app.use(cors());


const port = process.env.PORT || 5000;
const uri =
  "mongodb+srv://Naim:Naim123@curd.gploutp.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

async function DBconnected() {
  try {
    await client.connect();
    console.log(`mongoDB connected`.cyan.bold);
  } catch (error) {
    console.log(error.name.red, error.message.bold.red);
  }
}
DBconnected();
const Product = client.db("foodPanda").collection("products");
const User = client.db("foodPanda").collection("users");

//endpoint
app.post("/product", async (req, res) => {
  try {
    const result = await Product.insertOne(req.body);
    console.log('new user', result);

    if (result.insertedId) {
      res.send({
        success: true,
        message: `Successfully created the ${req.body.name} with id ${result.insertedId}`,
      });
    } else {
      res.send({
        success: false,
        error: "Couldn't create the product",
      });
    }
  } catch (error) {
    console.log(error.name.bgRed, error.message.bold);
    res.send({
      success: false,
      error: error.message,
    });
  }
});

app.listen(port, () => {
  console.log(`app is running on ${port}`.cyan.bold);
});
