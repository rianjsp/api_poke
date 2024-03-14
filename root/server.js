const express = require('express');
const path = require('path');
const app = express();
const port = 3030;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/poke', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index_poke.html'));
});


app.listen(port, () => {
    console.log(`Servidor rodando: http://localhost:${port}`);
});
