
const fs = require('fs');
// const path = require('path');
const uuid = require('../helpers/uuid');
const api = require('express').Router();

// Get method to read data from API
api.get('/api/notes', (req, res)=>{
    fs.readFile('./db/db.json', (err, data)=>{
        if (err){
            console.error(err);
            alert(err);
        } else {
            // let notes = JSON.parse(data);
            // res.json(notes);
            res.send(data);
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
            fs.writeFile('./db/db.json', JSON.stringify(notes), (err)=>{
                if (err){
                    console.error(err);
                    alert(err);
                } else {
                    res.json(newNote);
                }
            })
        }
    })
})

api.delete("/api/notes/:id", (req, res)=>{
    console.log("in delete");
    fs.readFile('./db/db.json', (err, data)=>{
        if (err){
            console.error(err);
            alert(err);
        } else {
            console.log("else");
            let notes = JSON.parse(data);
            let noteTodelete;
            for (var i=0; i < notes.length;i++){
                if (notes[i].id === req.params.id){
                    noteTodelete = i;
                }
            }
            console.log(noteTodelete);
            notes.splice(noteTodelete,1);
            console.log(notes)
            fs.writeFile('./db/db.json', JSON.stringify(notes), (err)=>{
                if (err){
                    console.error(err);
                    alert(err);
                } else {
                    res.json(notes);
                }
            })
        }
    })
})


module.exports = api;