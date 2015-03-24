var express = require('express')
var bodyParser = require('body-parser')

var app = express()
app.use(bodyParser.json())
app.use('/api/posts',require('./controllers/api/posts'))


app.get('/', function (req, res) {
    res.sendfile('layouts/posts.html', function (err){
        if (err) {
            console.log(err);
            res.status(err.status).end();
        }
        
        else {
            console.log('Sent:', 'layouts/posts.html');
        }
    });
})

app.listen(3000, function () {
    console.log('Server listening on', 3000)
})