// const fs = require('fs');
const path = require('path');
const html = require('express').Router();

html.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/assets/notes.html'));
    });

html.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/assets/index.html'));
    });


module.exports = html;

