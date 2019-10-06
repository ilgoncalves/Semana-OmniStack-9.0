const express = require('express');
const mongoose = require('mongoose')
require('dotenv/config');
const { DB_USERNAME, DB_PASSWORD } = process.env;

const routes = require('./routes');

const app = express();

mongoose.connect(`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@omnistack9-cx2ri.mongodb.net/omnistack?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());

app.use(routes);

app.listen(3000);