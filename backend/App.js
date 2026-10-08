const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path = require('path');
dotenv.config({path: path.join(__dirname,'config', 'config.env')})
app.listen(8000, ()=>{
    console.log("Server listening to port 8000 in production");
});