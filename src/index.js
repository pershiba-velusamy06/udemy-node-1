import express from 'express';


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', (req,res,next)=>{
  console.log('I m the first')
  //res.send('I m the first')
  next()
});
app.use('/user',(req,res)=>{
  console.log('I m the second')
  res.send('I m the second')

})

app.listen(3000, () => {
    console.log("Node server is running in port 3000");
})
app.timeout = 60000;

export default app