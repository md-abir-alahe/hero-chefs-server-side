const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

// load Data
const chefs = require('./data/data.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hero Chef is running');
})

// all chefs and recipes 
app.get('/chefs', (req, res) => {
    res.send(chefs);
})

// specific chef
app.get('/chefs/:id', (req, res) => {
    const id = req.params.id;
    const selectedChef = chefs.find(n => n._id == id);
    res.send(selectedChef);
})

app.listen(port, () => {
    console.log(`Hero Chef API is running on port: ${port}`);
})

// Nothing to do. But I need to do something 