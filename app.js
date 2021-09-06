const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

app.get('/api', (req, res) => {
    res.json({
        message: "Welcome to the API"
    });
});


app.post('/api/posts', verifyToken,(req, res) => {
    res.json({
        message: 'Post Created'
    })
});


app.post('/api/login',  (req, res) => {
    // Mock user
    const user = {
        id:1,
        username: 'viseth',
        email:'viseth89@gmail.com'
    }


    jwt.sign({ user: user}, 'secretkey', (err, token) => {
        res.json({
            token
        });
    });
});

// FORMAT OF TOKEN
// Authorization: Bearer <access_token>


// Verify Token

function verifyToken(req, res, next) {
    // Get auth header value
    const bearerHeader = req.headers['authorization'];
    // Check if bearer is undefined
    if(typeof bearerHeader !== 'undefined'){
        
    } else {
        // Forbidden
        res.sendStatus(403);
    }

}

app.listen(5000, () => console.log('Server Started on port 5000'))

// app.listen(5000, () => {
//     console.log('Server started')
// });