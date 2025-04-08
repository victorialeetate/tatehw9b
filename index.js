const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('views'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/ex1', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'ex1.html')); 
});

app.get('/ex2', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'ex2.html'));
});

app.get('/ex3', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'ex3.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
