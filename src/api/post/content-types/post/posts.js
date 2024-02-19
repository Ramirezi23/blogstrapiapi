'use strict';

const axios = require('axios');

module.exports = {
  async afterCreate(result, data) {
    axios.post('https://api.netlify.com/build_hooks/65ce24ee5e61fe16aea8099a')
  },

  async afterUpdate(result, params data) {
    axios.post('https://api.netlify.com/build_hooks/65ce24ee5e61fe16aea8099a')
  },
};
