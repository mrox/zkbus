const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { deviceService, deviceZKService } = require('../services');

const getDevices = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await deviceService.queryDevices(filter, options);
  res.send(result);
});

const updateUser = catchAsync(async (req, res) => {
  // console.log(req.body, req.params);
  await deviceZKService.updateUser(req.params.deviceId, req.body)
  return res.json({ message: 'ok' });
});


module.exports = {
  getDevices,
  updateUser,
};
