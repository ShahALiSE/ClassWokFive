var http = require("http");
  var express = require('express');
  var app = express();
  var server = http.Server(app);
  //var bodyParser = require('body-parser');  
  //var urlencodedParser = bodyParser.urlencoded({ extended: false })  




app.get('/', function (req, res) {
     res.sendFile(__dirname+'/index.html');
});

app.get('/about',function(rep,res){
  res.sendFile(__dirname+'/about.html');
})

app.get('/form', function (req, res) {
     res.sendFile(__dirname+'/form.html');
});

//app.post('/form', ,urlencodedParser, function (req, res) {
    
app.post('/form', function (req, res) {
    console.log(req.body.name);
    console.log(req.body.email);
    
     //res.sendFile(__dirname+'/form.html');
});




// Print URL for accessing server
 server.listen(process.env.PORT, process.env.IP, function(){
    console.log('Server running');
  });
