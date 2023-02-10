const axios = require('axios');
const config = require('../config.js');
const db = require('../database/index.js')

let getReposByUsername = (username/* TODO */) => {
  // TODO - Use the axios module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL

  //method:"get"?

  let options = {
    method: 'get',
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  let res = axios(options).then((response) => {
    var data = response.data
    // console.log('responseFromAxios', response.data)
    for (var i = 0; i < data.length; i++) {
      // console.log('data@i', data[i])
      var repo = data[i];
      db.save(data[i]);
    }
    //response save to DB
  }).catch((error) => {
    console.log('there has been an error', error)
  })

  //bottom works too

  // axios.get(`https://api.github.com/users/${username}/repos`).then((response) => {
  //   console.log('responseFromAxios', response)
  // })

}

module.exports.getReposByUsername = getReposByUsername;