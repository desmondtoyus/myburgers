var mysql = require("mysql");
var connection;
if (process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else{
    var connection = mysql.createConnection({
        port: 3306,
        host: "localhost",
        user: 'desmond',
        database: "burgers_db",
        password: 'desmond$$41'
    });

}

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }

    console.log("connected as id " + connection.threadId);

});

module.exports = connection;