var myData = require('./server-assets/myData.js');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));


app.use(function(req, res, next){
res.setHeader('Access-Control-Allow-Origin', '*');
res.setHeader('Access-Control-Allow-Method','OPTIONS, GET, POST');
res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
next()
});




app.get('/', function(req, res) {
	res.send('Hello World!')
});

app.get('/Friends', function(req, res) {
	var data = myData.getFriends()
	res.send(data);
});
app.post('/Friends/new', function(req, res) {
	res.send(myData.addfriends({name: req.body.name, age: req.body.age, yearMet: req.body.yearMet}))
	
});

app.get('/family', function(req,res) {
	var data = myData.getFamily();
	res.send(data);
});
app.post('/family/new', function(req, res) {
	res.send(myData.addFamily({name: req.body.name, age: req.body.age, relationship: req.body.relationship}))
})

app.get('/activities', function(req,res) {
	var data = myData.getActivities();
	res.send(data);
})








app.listen(3000);