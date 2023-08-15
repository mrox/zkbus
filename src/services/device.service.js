const httpStatus = require('http-status');
const { User } = require('../models');
const ApiError = require('../utils/ApiError');
const Device = require('../models/device.model');


const queryDevices = async () => {
 
  return Device.find();
};

module.exports = {
  queryDevices
};
