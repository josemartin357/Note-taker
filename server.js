const PORT = process.env.PORT || 3001;
// const path = require('path');
const express = require('express');
const app = express();

// requiring routes for api and html routes
const api = require('./routes/apiRoute');
const html = require('./routes/htmlRoute');

// requiring db.json
// const notesList = require('./db/db.json');

app.use('/api', api);
app.use('/html',html);

// Middleware for parsing JSON and urlencoded form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// console log listening to port
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});