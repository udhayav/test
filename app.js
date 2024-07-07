const express = require("express")
const mongoose =  require('mongoose');
const productRoute = require('./routes/product.route.js')
const app = express()

// middleware
app.use(express.json())
app.use(express.urlencoded({extended : false}))


//routes
app.use('/api/products',productRoute)


//home page
app.get('/',(req, res) =>{
  res.send("welcome to the home page")
})

//database connection and server 
mongoose.connect("mongodb+srv://udhaya:LhzyLcQpTypfIGA8@backend.mpupqcv.mongodb.net/?retryWrites=true&w=majority&appName=backend")
.then(()=>{
  console.log("connected to the database")
  app.listen(5000 , ()=>{
    console.log("server is running at port 5000")
  })
})
.catch((error)=>{
  console.log("connection to the database  failed", error)
})