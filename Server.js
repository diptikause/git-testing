const express = require('express')
const app = express()
app.use(function(req,res,next){
    console.log(req);
    next();
})
app.get('/', function (req, res) {
  res.send('hello world')
  
})
app.get('/profile', function (req, res) {
    res.send('Hi dipti')
    
  })
  app.get('/profile/:name', function (req, res) {
    res.send(`shruti,${req,params.name}`)
    
  })
  
  

app.listen(3004)     