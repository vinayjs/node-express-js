const express = require('express');

const app = express();

app.get('/', (req, res)=>{
    res.send('Hello World')
    
})

app.get('/world',(req,res)=>{
    res.send('Welcome back')
})

app.get('/world/007',(req,res)=>{
    res.send('The name is Bond , James Bond')
})

app.listen(3000,(req, res)=>{
   console.log('Running..')
});
