var express = require('express');
var app = express();

app.get('/', function(req, res) {
   res.sendfile('./index.html');
});

app.use(express.static('public'));

app.listen(95);
console.log('Listening on port 95');
