const { response } = require('express');
const fs = require('fs');
// const path = require('path');
const api = require('express').Router();

api.get('/api/notes', (req, res)=>{
    fs.readFile('./db/db.json', (err, data)=>{
        if (err){
            console.error(err);
        } else {
            let notes = JSON.parse(data);
            res.json(notes);
        }
    });
});



module.exports = api;