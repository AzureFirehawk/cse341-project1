const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb');
const mongodb = require('./db/connect');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/', require('./routes'));
app.use('/contacts', require('./routes/contacts'));



mongodb.initDb((err, db) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port, () => {
            console.log('Connected to DB and listening on port ' +  port);
        });
    }
});
