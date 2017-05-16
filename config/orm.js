var connection = require('./connection.js');

// Object for all our SQL statement functions.
var orm = {
  //showing all the items in table
  all: function(tableInput, cb) {
    connection.query('SELECT * FROM ' + tableInput + ';', function(err, result){
      if (err) throw err;
      cb(result);
    })
  },
//removing item from table by changing eaten boolean
  update: function(tableInput, condition, cb){
    connection.query('UPDATE ' + tableInput + ' SET devoured=true WHERE id=' + condition + ';', function(err,result){
      if(err)throw err;
      cb(result);
    })
  },

  //adding burgers to table
  create: function(tableInput,val,cb){
    connection.query('INSERT INTO ' + tableInput + " (burger_name) VALUES ('"+ val +"');", function(err,result){
      if(err)throw err;
      cb(result);
    })
  }
}

module.exports = orm;
