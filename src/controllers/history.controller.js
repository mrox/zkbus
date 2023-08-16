const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { historyService } = require('../services');


const getHistories = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  // const options = pick(req.query, ['sortBy', 'limit', 'page']);
  // const result = await deviceService.queryDevices(filter, options);
  const result = await historyService.queryHistories();
  res.send(result);
});

module.exports = {
  getHistories
};
