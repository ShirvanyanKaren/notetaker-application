const notes = require('express').Router();
const { readFromFile, writeToFile, readAndAppend } = require('../helpers/fsUtils');
const uuid = require('uuid');

notes.get('/', (req, res) => {
    console.log(`${req.method} request received for notes`)
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
})

notes.post('/', (req, res) => {
    console.log(`${req.method} request received to add a note`);

    const { text, title } = req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
            note_id: uuid(),

        };

        readAndAppend(newNote, './db/db.json');
        res.json('Note added successfully');
    } else {
        res.errored('Error. Couldnt add tip');
    
    }


});
module.exports = notes;

