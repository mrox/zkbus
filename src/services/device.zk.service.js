const logger = require('../config/logger');
const moment = require('moment-timezone');
const Device = require('../models/device.model');
const History = require('../models/history.model');
const ApiError = require('../utils/ApiError');


const queryDevices = async () => {

  return Device.find();
};


const createDeviceLog = async (SN, data) => {
  data = data.split("\t");
  if (data.length < 6) throw new ApiError(400, "Invalid data");
  const latlong = data[1].split(",");
  let time = data[1]
  let lat = null;
  let long = null;
  if (latlong.length > 2) {
    time = latlong[0];
    lat = latlong[1];
    long = latlong[2];
  }

  const history = await History.create({
    SN,
    personId: data[0],
    time: moment.tz(time, "YYYY-MM-DD HH:mm:ss", "Asia/Ho_Chi_Minh").toDate(),
    lat: lat,
    long: long,
    status: data[2],
    verify: data[3],
    workCode: data[4],
    reversed: data[5]
  });
  return history
};

module.exports = {
  queryDevices,
  createDeviceLog
};
