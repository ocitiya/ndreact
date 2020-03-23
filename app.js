require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path');

const port = process.env.SERVER_PORT;

app.use(express.static('build'));

app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/build/index.html')));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));