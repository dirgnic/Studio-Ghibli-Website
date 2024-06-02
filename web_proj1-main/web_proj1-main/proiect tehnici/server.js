const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));

app.post('/login', (req, res) => {
    // Handle login logic here
    // For now, let's just send a dummy success response
    res.json({ success: true });
});

// Catch all other routes and serve 404 page
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});