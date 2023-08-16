const express = require('express');

const historyController = require('../../controllers/history.controller');

const router = express.Router();

router
  .route('/')
  // .post(auth('manageUsers'), validate(userValidation.createUser), userController.createUser)
  .get( historyController.getHistories);


module.exports = router;
