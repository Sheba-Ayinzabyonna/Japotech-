const express = require('express')
const mongoose = require('mongoose')
const bodyParser=require('body-parser')

mongoose.connect("mongodb+srv://Admin:Ttu1aku5_Sheba@cluster1.xnawy.mongodb.net/hackathon?retryWrites=true&w=majority", {
useNewUrlParser: true, useUnifiedTopology: true
  ,
})
mongoose.connection
  .on('open', () => {
    console.log('Mongoose connection open');
  })
  .on('error', (err) => {
    console.log(`Connection error: ${err.message}`);
  });


const userModel=require('./userModel')
const app = express()
const port = 5000


app.use(bodyParser.urlencoded({ extended: true }));



app.use(express.static('public'))


// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
app.get('/',function(req,res){
  res.sendFile(__dirname+"/"+"index.html")
})
app.get('/login',function(req,res){
  res.sendFile(__dirname+"/"+"login.html")
})

app.listen(5000, () => {
  console.log(`Example app listening at http://localhost:${5000}`)
})





