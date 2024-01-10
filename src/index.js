// import express from 'express';


// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use('/', (req,res,next)=>{
//   console.log('I m the first')
//   //res.send('I m the first')
//   next()
// });
// app.use('/user',(req,res)=>{
//   console.log('I m the second')
//   res.send('I m the second')

// })




const path = require('path');

const express = require('express');

const mainRoutes = require('./routes/index');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(mainRoutes);

app.listen(3000,()=>{
  console.log('node server is running in 3000')
});