const express = require('express');
const path = require('path');

const app = express();
const appport = process.env.PORT || 3000


app.use(express.json());

app.all('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/src/public/index.html'));
});

app.listen(appport, () => {
    console.log(`Server is running on port: ${appport}`);
});