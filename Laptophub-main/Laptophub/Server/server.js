const express = require('express');
const server = express();
const bcrypt = require('bcrypt');
const port = 3000;
const cors = require('cors');
const CORS_OPTION = {origin:"http://localhost:4200"};
server.use(express.json());
server.use(express.urlencoded({extended:true}));
server.use(cors(CORS_OPTION));

const db = require('./db/models');
db.sequelize.sync();
require('./app/app-route')(server);

server.get('/',(req,res)=>{
 res.send({message:"Server start"})
})

server.listen(port,()=>{
console.log(`http://localhost:${port} started`);
})