var express = require('express'),
    routes = require('./server/routes'),
    bodyParser = require('body-parser');
	
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(process.cwd() + '/public'));

app.use(routes(express.Router()));

app.get('/*', function (req, res) {
	res.sendFile('index.html', {
		root: './public'
	});
});

app.set('port', process.env.PORT || 8080);

app.listen(app.get('port'), function () {
	console.log("Magic happens on port", app.get('port'));
});
