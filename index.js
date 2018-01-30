let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let ip = require('ip');


app.use(bodyParser.json()); // for parsing application/json


app.get('/', (req, res) => res.json({success: true, version: "0.1", ip:ip.address() }))

app.listen(3000, () => console.log('Devops app listening on port 3000!'))

module.exports = app