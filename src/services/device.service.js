const httpStatus = require('http-status');
const { User } = require('../models');
const ApiError = require('../utils/ApiError');
const Device = require('../models/device.model');
const logger = require('../config/logger');


const queryDevices = async () => {
  return Device.find();
};

const createDevice = async (deviceBody) => {
  logger.info('createDevice');
  let device = await Device.findOne({SN: deviceBody.SN});
  if(device){
    // Update Devcie
    device = Object.assign(device, deviceBody);
    await device.save();
  }
  else
    device = await Device.create(deviceBody);
  return device;
};

module.exports = {
  queryDevices,
  createDevice
};
