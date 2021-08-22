const express = require('express');
const app = express();
const port = 8080;

app.use(express.static('public'));

app.get('/', (req, res) => res.send('<html><head><title>Testing Title</title></head><body><h1>Testing 2</h1><img src="images/floorboards_01.png" alt="Floorboards" width="500" height="600"></body></html>'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
