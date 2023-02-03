const express = require('express');
let app = express();
const github = require('../helpers/github.js')
const save = require('../server/index.js')
const bodyParser = require("body-parser")
const Repo = require('../database/index.js')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(__dirname + '/../client/dist'));

// TODO - your code here!
// Set up static file service for files in the `client/dist` directory.
// Webpack is configured to generate files in that directory and
// this server must serve those files when requested.
let dataTerm = '';

app.post('/repos', function (req, res) {
  // console.log('req.term', term)
  console.log('ok this is req', req.body)
  var term = req.body.term
  dataTerm = term;
  // console.log('alright this is res', res)
  github.getReposByUsername(term)
  res.send(term)

  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
});

app.get('/repos', function (req, res) {
  // var term = req.body
  // console.log('req', req)
  Repo.Repo.find({ owner: dataTerm }).sort({ stargazers_count: 1 }).limit(25)
    .then(data => {
      console.log('data', data)
      res.send(data)

    })
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});

