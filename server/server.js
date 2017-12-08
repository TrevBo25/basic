const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const ctrl = require('./controller')

const app = express();

app.use(bodyParser.json());

app.use(cors());

// app.get('/api/test', (req, res)=> {
//     res.status(200).send('http://i63.tinypic.com/2j9y8p.png');
// })

app.get('/api/test', ctrl.test);

const PORT = 3535;

app.listen(PORT, () => console.log('we are listening on port ' + PORT));