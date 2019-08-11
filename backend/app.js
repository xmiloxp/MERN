const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

// settings
app.set('port', process.env.PORT || 4000);

// middlewares 
app.use(cors());
app.use(express.json());

// routes
app.use('/api/notes', require('./routes/notes'));
app.use('/api/users', require('./routes/users'));

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('../frontend/build'));
    console.log(__dirname)
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    })
}
module.exports = app;
