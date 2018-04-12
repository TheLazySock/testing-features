var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var port = process.env.PORT || 3000;

var app = express();

// app.use(require('./api'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/posts', (req, res) => {
    console.log('get there');
    res.append('Access-Control-Allow-Origin', '*');
    res.send(
      [{
        title: "Hello World!",
        description: "Hi there! How are you?"
      }]
    )
  })

app.listen(port, function() {
	console.log("Listening on " + port);
});