const express=require('express');
const server=express();
const port=3000;
const cors=require('cors');
//const { Server } = require('http');
const { response } = require('express');
const cors_option={origin:"http://localhost:4200",optionSucessStatus:200};
server.use(express.json());
server.use(express.urlencoded({extended:true}));
server.use(cors(cors_option));
const USERS=[{id:1,userName:"akshita"},
{id:2, userName:"ajay"},
{id:3,userName:"jogi"}
]


server.get('/',(req,resp)=>{
resp.send("express is working");
})
server.get('/users',(req,resp)=>{
    resp.setHeader("Content-Type","application/json");
resp.send(USERS);

})
server.listen(port,()=>{
    console.log("http://localhost:3000");
})