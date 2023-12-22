var data = require('./script');


const express = require('express')
const app = express()


app.use((req , res , next)=>{
    console.log("midleware");
    next();
})
app.get('/', function (req, res) {
    res.send('odfdsdfssss World')
  })
app.get('/contact' , function(req , res){
    res.send("this is contact page");
})

app.get('/' , function(req , res){
    res.send("hello ji");
})

app.get('/profile' , function(req , res){
    res.send("are yrr");
})


app.get('/home' , (req , res)=>{
    res.send("home page");
} )



app.listen(3000)

