// const sum = (num1, num2) => {
//     return num1 + num2;
// }

// const result = sum(2, 3);
// console.log("🚀 ~ file: index.js ~ line 6 ~ result", result)

// const fs = require('fs');

// const generateFile = () => {
//     try {
//         fs.writeFileSync('data.txt', "Hello world");
//     }catch (err) {
//         console.log("🚀 ~ file: index.js ~ line 14 ~ generateFile ~ err", err) 
//     }
// }

// generateFile();

// const http = require('http');

// http.createServer(function (req, res) {
//     res.write('Server started. Hello!');
//     res.end();
// }).listen(8080);

// const myModule = require('./my-module');

// const date = myModule();
// console.log("🚀 ~ file: index.js ~ line 30 ~ date", date);

// Requiring express
const express = require('express');

// Init express
const app = express();

// Define port
const port = 8080;

// Define the API endpoint
app.get('/', (req, res) => {
    res.send("Hello from localhost");
});

app.get('/api/cats', (req, res) => {
    const cats = ["Charles", "Susan", "Stevon"];

    res.send(JSON.stringify(cats));
});

app.get('/api/dogs', (req, res) => {
    const dogs = ["Morgan", "Grace", "Oscar"];

    res.send(JSON.stringify(dogs));
});


app.listen(port, () => {
    console.log("Listening on port: ", port);
});

