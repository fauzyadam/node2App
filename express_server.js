const express = require('express');
const mongoose = require('mongoose');
const userController = require('./controllers/user_controller')
const app = express();

app.get('/', (req, res) => {
    res.send('success!');
})
app.use(express.json());
app.post('/users', userController.addUser);
app.delete('/users', userController.deleteUserById);



app.listen(3000, ()=> console.log('server is running on port 3000'));