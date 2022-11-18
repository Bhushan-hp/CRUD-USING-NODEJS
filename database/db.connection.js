const mysql = require('mysql');


const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "studentdata",
});

connection.connect((err) => {

    if (err) {
        console.log(err.message)
    } else {
        console.log("db connected to schooldb");
    }

});


module.exports = connection;