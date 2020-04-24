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
      callback(null, repos.slice(0,25));
    }
  });
}


let save = (repos, callback) => {
  for (repo of repos){
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
    newRepo.save();
  }
  callback();
}

module.exports.save = save;
module.exports.retrieve = retrieve;