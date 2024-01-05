const express=require('express');
const mongoose = require('mongoose');
const cors=require('cors')
require('dotenv').config()
const server=express();
const ProductRouter=require('./Routes/Product')
const path=require('path')



//  Json Body parser Middlerware

server.use(express.json());
server.use(cors())


// DB connection

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);

  console.log('Database Connected')
}


// Route Connecti

server.use('/products',ProductRouter.productRouter)
server.get('/',(req,res)=>{
      server.use(express.static(path.resolve(__dirname,"build")));
      res.sendFile((path.resolve(__dirname,"build","index.html")));
})







server.listen(8080,()=>console.log('Server Started'))