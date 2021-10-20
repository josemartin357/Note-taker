// const fs = require('fs');
// const path = require('path');
const html = require('express').Router();

// GET Route for retrieving all the tips

html.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
    });

html.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
    });


module.exports = html;

