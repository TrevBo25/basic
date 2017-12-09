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

// This is the way to create an enpoint without the use of the controller
app.get('/api/test', (req, res)=> {

    // This is the response. It is sending information back to the React side. Saying a status of 200 means everything went great. The string in the .send is the link to the image that will be displayed.
    res.status(200).send('http://i63.tinypic.com/2j9y8p.png');
})

// This is the way to create an enpoint with the use of the controller. This enpoint will do the exact same as the above.
// app.get('/api/test', ctrl.test);


// The number of the port is your choice, you just have to keep it consistent.
const PORT = 3535;

// This is telling express to listen for any requests coming to localhost
app.listen(PORT, () => console.log('we are listening on port ' + PORT));