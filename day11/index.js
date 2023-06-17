const express = require('express');
const path = require ('path');
const app = express();
const bodyParser = require('body-parser');
const { send } = require('express/lib/response');
const port = 2023;
const connection = require('./DB/db');
const createDB = require('./DB/createDB_CRUD');
app.use(express.static(path.join(__dirname,"static")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req,res)=>{

    res.send ("HI DB :) ")
})

//createDB
app.get('/createTable', createDB.creatTable);

app.listen(port, ()=>{
    console.log("server is running on port",port);
});
