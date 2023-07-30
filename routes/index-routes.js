// const express = require('express');
// const app = require('express');
const app = require('express').Router();

const noteRouter = require('./notes');



app.use('/notes', noteRouter);



module.exports = app;