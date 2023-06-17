// import and set up
const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const sql = require('./DB/DB');
const CRUD = require('./DB/CRUD')
const cookie = require('cookie-parser');
const port = 2023;
app.use(express.static(path.join(__dirname, "static")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookie());

//routing 
app.get('/', (req,res)=>{
    //res.send("Hi Day 8!!");
    res.sendFile(path.join(__dirname, "views/index.html"))
});

app.get('/formA', CRUD.createNewUser);

app.post('/formB', CRUD.searchUser);

app.get('/activUser', (req ,res)=>{
    res.send("hi " + req.cookies.name_user);
    })

app.get('/selctAllUsers', CRUD.selectAllUsers);

app.get('/createTable', CRUD.createTable);

app.get('/dropTable', CRUD.dropTable);

// set up listen
app.listen(port, ()=>{
    console.log("server is running on port", port);
});
