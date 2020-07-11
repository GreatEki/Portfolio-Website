const express = require('express');
const path = require('path');

// initialising express
const app = express();

// cofiguring middleware and data parsing
// app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// configuring static folder
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
