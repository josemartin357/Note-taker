
const fs = require('fs');
// const path = require('path');
const uuid = require('./helpers/uuid');
const api = require('express').Router();

// Get method to read data from API
api.get('/api/notes', (req, res)=>{
    fs.readFile('./db/db.json', (err, data)=>{
        if (err){
            console.error(err);
            alert(err);
        } else {
            let notes = JSON.parse(data);
            res.json(notes);
        }
    });
});

// Post method here
api.post('/api/notes', (req, res)=>{
    const newNote = req.body;
    newNote.id = uuid();

    fs.readFile('./db/db.json', (err, data)=>{
        if (err){
            console.error(err);
            alert(err);
        } else {
            const notes = JSON.parse(data);
            notes.push(newNote)
        }
    fs.writeFile('./db/db.json', JSON.stringify(notes), (err)=>{
        if (err){
            console.error(err);
            alert(err);
        } else {
            res.json(newNote);
        }
    })
    

    })
})


module.exports = api;