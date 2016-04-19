var mysql = require('mysql');

function BD() {
    var connection = mysql.createConnection({
        user: 'root',
        password: 'mysqlneetp7k9',
        host: 'localhost',
        port: 3306,
        database: 'myDB'
    });
    return connection;
}

var objBD = BD();

var post = {
    time: 'time' 
};

objBD.query("INSERT INTO timeRecord SET ?", post, function(error) {
    if (error) {
        console.log(error.message);
    } else {
        console.log('success');    
    }
});
objBD.query("select * from timeRecord",function(err, rows) {
  for(var index in rows){
    console.log('The solution is: ', rows[index]);
  }
});
objBD.end();
