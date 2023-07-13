const path = require('path');
const sql = require('./db');
const cookie = require('cookie-parser');

// Create a table 'Users'
/*const createUsersTable = (req, res) => {
  const Q1 = `CREATE TABLE Users (
    email VARCHAR(255) PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) not null,
    favoriteCoin VARCHAR(255) not null
  )`;
  
  sql.query(Q1, (err, mysqlres) => {
    if (err) {
      console.error("Error creating 'Users' table:", err);
      return;
    }
    console.log("'Users' table created successfully");
    res.send("table created");
  });
};*/
const CreateUserTable = (req,res)=>{
    const Q1 = 'CREATE TABLE IF NOT EXISTS `USERS` (\
        ID int(9) NOT NULL PRIMARY KEY AUTO_INCREMENT,\
        Email varchar(50) NOT NULL,\
        FullName varchar(50) NOT NULL,\
        UserName varchar(50) NOT NULL,\
        Password varchar(50) NOT NULL,\
        CourseNumber varchar(3) NOT NULL\
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8';
        SQL.query(Q1, (err,mysqlres)=>{
        //console.log("in query");
        if (err) {
            console.log(err);
            //res.status(400).send(err);
            res.status(400).render('home', {v1: err})
            return;
        }
        //res.send("hi - table created");
        res.render('home', {v1: "Table created"});
        return;
    })};

// Create a new user
const CreateNewUser = (email, username, password, favoriteCoin, callback) => {
  const query = "INSERT INTO Users (email, username, password, favoriteCoin) VALUES (?, ?, ?, ?)";
  sql.query(query, [email, username, password, favoriteCoin], (err, results) => {
    if (err) {
      callback(err, null);
      return;
    }
    console.log("New user created");
    callback(null, results);
  });
};


// Update user information
const updateUserInfo = (email, username, password, favoriteCoin, callback) => {
  const query = "UPDATE Users SET favoriteCoin = ? WHERE email = ?";
  sql.query(query, [email, username, password, favoriteCoin, callback], (err, results) => {
    if (err) {
      callback(err, null);
      return;
    }
    console.log("User information updated");
    callback(null, results);
  });
};

// Drop all tables
const dropAllTables = () => {
  const query = "DROP TABLE Users";
  sql.query(query, (err, results) => {
    if (err) {
      console.error("Error dropping tables:", err);
    } else {
      console.log("Tables dropped successfully");
    }
  });
};

// Check if a user exists
const checkUserExists = (email, callback) => {
  const query = "SELECT EXISTS (SELECT 1 FROM Users WHERE email = ?) AS userExists";
  sql.query(query, [email], (err, results) => {
    if (err) {
      callback(err, null);
      return;
    }
    const userExists = results[0].userExists === 1;
    callback(null, userExists);
  });
};

// Create a table 'History'
const createHistoryTable = () => {
  const query = `CREATE TABLE History (
    email VARCHAR(255) PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    FromCoin VARCHAR(255) NOT NULL,
    Amount INT NOT NULL,
    ToCoin VARCHAR(255) NOT NULL,
    date DATE
  )`;
  
  sql.query(query, (err, results) => {
    if (err) {
      console.error("Error creating 'History' table:", err);
    } else {
      console.log("'History' table created successfully");
    }
  });
};


module.exports = {
  createUsersTable,
  CreateNewUser,
  updateUserInfo,
  dropAllTables,
  checkUserExists,
  createHistoryTable
};