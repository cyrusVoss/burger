var mysql = require('mysql');

//setting up mysql
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'burgers_db'
})

//make connection
connection.connect(function(err){
  if (err) throw err;
  console.log("connected as id: " + connection.threadId);
});

//export file to use in ORM
module.exports = connection;
