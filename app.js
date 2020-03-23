const express = require('express');
const app = express();
const path = require('path');

const port = 5000;

app.use(express.static('build'));

app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/build/index.html')));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));