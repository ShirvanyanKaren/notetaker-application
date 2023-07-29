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
        






    }


})

