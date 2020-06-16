const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  id: {
    type: Number,
    unique: true
  },
  name: String,
  html_url: String,
  dscription: String,
  owner_id: Number,
  owner_login: String,
  stargazers_count: Number,
  watchers_count: Number,
  forks: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let retrieve = (callback) => {

  Repo.find().sort([['forks', 'descending']]).exec(function (err, repos) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, repos);
    }
  });
}


let save = (repos, callback) => {
  //let initialLength = 0;
  let promises = []

  for (var i = 0; i < repos.length; i++) {
    let repo = repos[i];
    promises.push(new Promise((resolve, reject) => {
      let repoJSON = {
        id: repo.id,
        name: repo.name,
        html_url: repo.html_url,
        description: repo.description,
        owner_id: repo.owner.id,
        owner_login: repo.owner.login,
        stargazers_count: repo.stargazers_count,
        watchers_count: repo.watchers_count,
        forks: repo.forks
      }

      let newRepo = new Repo(repoJSON);
      newRepo.save((err) => {
        if (err) {
          resolve(0); //not added
        } else {
          //console.log('added');
          resolve(1); //added
        }
      });
    }));
  }

  Promise.all(promises)
  .then(array => {
    let reposAdded = 0;
    array.forEach(item => reposAdded += item);
    callback(reposAdded);
  })
  .catch(err =>
    callback(0));

  //callback(eventualLength - initialLength);
}

module.exports.save = save;
module.exports.retrieve = retrieve;