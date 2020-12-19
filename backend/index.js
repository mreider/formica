var http = require('http');
require('dotenv').config()

var port = process.env.PORT || '3000';
// import { controllerFunctions } from './functions.js';
const functionsList = require("./functions.js");

http.createServer(async function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    body = '';
    req.on('data', function (chunk) {
        body += chunk;
    });
    req.on('end', async function () {
        console.log("end: ", body);
        postBody = JSON.parse(body);
        var response = await functionsList.controllerFunctions(postBody);
        res.statusCode = 200;
        res.setHeader('content-Type', 'Application/json');
        res.end(JSON.stringify(response));
    });
}).listen(port, () => {
    console.log(`listening at localhost:${port}`);
});