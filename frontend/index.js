require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.PORT || '3001';
const backend = process.env.BACKEND || 'localhost';
const backendport = process.env.BACKENDPORT || '3000';
app.use(express.static('public'));
app.engine('html', require('ejs').renderFile);
app.get('/', (req, res) => {
    res.render('index.html', { backend: backend, backendport: backendport });
});
app.listen(port, () => console.log(`listening on port ${port}!`));