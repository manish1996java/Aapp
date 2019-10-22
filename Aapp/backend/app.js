const express = require('express');
const app = express();

const post = [{id:'safasdf',name:'banana'},{id:'safasdf',name:'banana'},{id:'safasdf',name:'banana'}];

app.use('/api/post',(req,res, next)=>{
    res.json(post);
    console.log('first');
})
app.use((req,res, next)=>{
    console.log('second');
})

module.exports = app;
