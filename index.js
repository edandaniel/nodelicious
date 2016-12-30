var app = require('./config/express')();
var loki = require('lokijs');

app.listen(3000,function(){
    var db = new loki('loki.json')
    console.log('Hello, 世界😂');
});

app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
})
