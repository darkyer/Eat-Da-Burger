// Import MySQL connection.
var connection = require("./connection.js");

var orm = {
    selectAll: function (tableInput, cb){
        var allQuery = "SELECT * FROM " + tableInput + ";";

        connection.query(allQuery, function(err, result){
            if(err){ throw err;}

            console.log("Selected ---------------");
            console.log(result);
            cb(result);
        });
    },
    insertOne: function(tableInput, values, cb){

        var insertQuery = "INSERT INTO " + tableInput + " (?,?) VALUES (?,?);";

        connection.query(insertQuery, ["burger_name", "devoured", values], function(err, result)
        {
            if(err){ throw err;}

            console.log("Inserted ---------------");
            console.log(result);
            cb(result);

        });

    }
};

module.exports = orm;