const Device = require('../models/device.model');


const queryDevices = async () => {
 
  return Device.find();
};

module.exports = {
  queryDevices
};
