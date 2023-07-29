const express = require('express');
const expApp = require('express').Router();

const noteRouter = require('./notes-routes');

const app = express();

expApp.use('/notes-router', noteRouter);



module.exports = expApp;