
const sql = require ('./db');
const creatTable = (req,res)=>{

const Q1 = "CREATE TABLE Customers ( CustomerID INT PRIMARY KEY, CustomerName VARCHAR(50),Email VARCHAR(100), Country VARCHAR(50))";
SQL.quary(Q1,(error,mysqlres)=>{
    if (error){
        console.log(error);
        res.send(error);
        return;
    }
    else {
        console.log("table created");
        res.send("table created");
        return;  
    }
    
});
};
module.exports={creatTable};