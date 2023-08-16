const httpStatus = require('http-status');
const History = require('../models/history.model');


const queryHistories = async () => {
  return History.find().limit(100).sort({ createdAt: -1 });
};



module.exports = {
  queryHistories
};
