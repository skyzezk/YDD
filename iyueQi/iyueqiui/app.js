const express=require('express');
const cors=require('cors');
const session=require('express-session');
const userRouter=require('./src/routers/user.js')
const productRouter=require('./src/routers/product.js')

var server=express();
server.listen(3000);

server.use(cors({
    origin:["http://127.0.0.1:8080",
    "http://localhost:8080"],
    credentials:true
}));
server.use(session({
    secret:'128位字符串',
    resave:true,
    saveUninitialized:true
}));
server.use(express.static('public'));

server.use('/user',userRouter);
server.use('/pro',productRouter);