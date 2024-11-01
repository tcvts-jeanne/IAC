// index.js
const express = require('express');
const cors = require('cors');
const connection = require('./db');

const app = express();
const PORT = 3000;

// Enable CORS for all routes
app.use(cors());

// Endpoint to get a random song
app.get('/random-song', (req, res) => {
    const query = 'SELECT * FROM songs ORDER BY RAND() LIMIT 1';
    
    connection.query(query, (error, results) => {
        if (error) {
            console.error('Error fetching random song:', error);
            res.status(500).send('Error retrieving song');
            return;
        }
        res.json(results[0]);
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
