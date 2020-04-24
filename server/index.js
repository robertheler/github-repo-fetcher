const github = require ('../helpers/github.js');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

let app = express();
app.use(express.static(__dirname + '/../client/dist'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  console.log(`From SERVER: POST/${req.body.username} received by the server`);

  github.getReposByUsername(req.body.username, (error, data) => {
    if (error) {
      updateDatabase(error, null)
      res.status(500).end();
    } else {
      updateDatabase(null, data);
      res.send(data);
      //res.send(data);
    }
  })
});

let updateDatabase = (error, data) => {
  if (!error) {
    console.log('About to update the database', data);
  }
}

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

