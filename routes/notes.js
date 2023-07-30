
const notes = require('express').Router();
const { readFromFile, writeToFile, readAndAppend } = require('../helpers/fsUtils');
const {v4: uuidv4 } = require('uuid');
// const yes = require('../db/db.json')

notes.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
});

notes.post('/', (req, res) => {
    console.log(`${req.method} request received to add a note`);

    const { text, title } = req.body;

    if (text && title) {
        const newNote = {
            title,
            text,
            id: uuidv4(),
        };

        readAndAppend(newNote, './db/db.json');
        res.json('Note added successfully');
    } else {
        res.status(400).json({ error: 'Bad Request. Could not add note' });
    
    }


});


notes.delete('/:id', (req, res) => {
    const noteIdToDelete = req.params.id;
    readFromFile('./db/db.json').then((data) => {
        const parsedData = JSON.parse(data);
        const filteredNotes = parsedData.filter((note) => note.id !== noteIdToDelete);
        writeToFile('./db/db.json', filteredNotes);
        res.json('Note deleted successfully');
    });
});



module.exports = notes;