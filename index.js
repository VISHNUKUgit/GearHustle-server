// Loads .env file contents into process.env by default
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const router = require('./Router/router')
 
// Create server
const ghServer = express()

ghServer.use(cors())
ghServer.use(express.json())
// establish connection between router and server
ghServer.use(router)

const PORT = 4000 || process.env.PORT

ghServer.listen(PORT,()=>{
    console.log(`GearHuslte Server is Live at port:${PORT} and waiting for client request`);
})

ghServer.get('/',(request,response)=>{
    response.send(`<h1>GearHuslte Server is  Started running at Port number ${PORT}</h1>`)
})