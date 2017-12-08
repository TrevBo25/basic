// Syntax to import in the server is far different than React. const [the name you want to reference it by in your code] = require('[the name of the dependency that you installed]')
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const ctrl = require('./controller')

// Here I created an app that uses express which is a Nodejs http server
const app = express();

// I am telling the app to use bodyParser and cors
app.use(bodyParser.json());
app.use(cors());


// This is the endpoint that the axios call from App.js will hit. This one specifically because '/api/test' matches that from the React side.
// app.get('/api/test', (req, res)=> {
//     res.status(200).send('http://i63.tinypic.com/2j9y8p.png');
// })

app.get('/api/test', ctrl.test);


// The number of the port is your choice, you just have to keep it consistent.
const PORT = 3535;

// This is telling express to listen for any requests coming to localhost
app.listen(PORT, () => console.log('we are listening on port ' + PORT));