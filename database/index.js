const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/fetcher', { useNewUrlParser: true, useUnifiedTopology: true })

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  owner: String,
  name: {
    type: String,
    unique: true
  },
  html_url: {
    type: String,
    unique: true
  },
  stargazers_count: Number
  //primary key field?

});

let Repo = mongoose.model('Repo', repoSchema);

// let newRepo = new Repo({ owner: 'midorili', name: 'rpp2210-fullstack-review', html_url: 'https://github.com/midorili/rpp2210-fullstack-review', stargazers_count: 0 })

let save = (/* TODO */repo) => {
  let newRepo = new Repo({ owner: repo.owner.login, name: repo.name, html_url: repo.html_url, stargazers_count: repo.stargazers_count }).save((err, result) => {
    if (err) {
      console.log('error', err)
    } else {
      console.log('Successfully inserted')
    }
  })

  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}

// newRepo.save();
//
module.exports.save = save;
module.exports.Repo = Repo;