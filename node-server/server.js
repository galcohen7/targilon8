const express = require('express'); 
const app = express(); 
const path = require('path');

// Serving the static React files from the 'public' directory
app.use(express.static('public'));

// Running our custom server on port 3001
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Custom Web Server is successfully running on port ${PORT}`);
});