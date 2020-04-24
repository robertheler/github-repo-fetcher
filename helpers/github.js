const request = require('request');
const config = require('../config.js');

let getReposByUsername = (username, callback) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API
  //GET /users/:username/repos

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  request(options, function (error, response, body) {
    if (!error) {
      //console.log(`From GitHub: ${response.statusCode}`);
      //console.log(JSON.parse(body).length);
      callback(null, JSON.parse(body));
    }
  });
}

module.exports.getReposByUsername = getReposByUsername;