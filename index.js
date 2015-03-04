var express = require('express');
var _ = require('lodash');
var bodyParser = require('body-parser');
var pg = require('pg');

var app = express();

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json());

app.post('/contacts', function(req, res) {
    pg.connect(process.env.DATABASE_URL, function(err, client, done) {
        if (err) {
            console.error('Failed to connect to database: ' + err);
            res.send({
                success: false
            });
        }
        var insert = 'INSERT INTO contact(name) ' +
                        'VALUES($1)';
        var newContact = req.body;
        client.query(insert, [ newContact.Name ], function(err, result) {
            if(err) {
                console.log(err);
            } else {
                console.log('Successfully inserted contact');
                res.send({
                    success: true
                });
            }
        });
    });
});

app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'));
    console.log('Database URL: ' + process.env.DATABASE_URL);
});
