var express = require('express');
var app = express();
var bodyParser = require('body-parser');
// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'));

app.get('/', function (req, res) {
   res.sendFile( __dirname + "/view/" + "index.html" );
});
app.get('/insertRecord', function(req, res) {
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
    time: req.query.time
};

objBD.query("INSERT INTO timeRecord SET ?", post, function(error) {
    if (error) {
        console.log(error.message);
    } else {
        console.log('success');
    }
});
objBD.end();
   res.send("success" );
});
app.get('/getRecords', function(req, res) {
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
data = "";
objBD.query("select * from timeRecord",function(err, rows) {
  data="";
  for(var index in rows){
    data += "<div>"+rows[index].time+"</div>";
  }
  res.send(data);
});
objBD.end();  
});
app.use(express.static('public'));

var server = app.listen(80, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})
