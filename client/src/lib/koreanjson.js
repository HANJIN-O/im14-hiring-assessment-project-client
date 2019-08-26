const axios = require('axios');


const remote = {
  url: 'http://koreanjson.com',
  get: function(url){
    return axios.get(url)
    .then(res => res)
  }
}

module.exports = remote
