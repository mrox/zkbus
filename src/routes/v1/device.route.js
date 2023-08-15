const express = require('express');

const deviceController = require('../../controllers/device.controller');

const router = express.Router();

router
  .route('/')
  // .post(auth('manageUsers'), validate(userValidation.createUser), userController.createUser)
  .get( deviceController.getDevices);


module.exports = router;
