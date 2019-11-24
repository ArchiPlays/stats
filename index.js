const express = require('express');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 8080;
const route = express.Router();

app.listen(PORT, () => {
    console.log('Server is up and running on port ' + PORT)
});

app.use(express.static('public'))
app.set('port', PORT);

app.get('/', (req, res) => {
    res.send("boi yay")
})