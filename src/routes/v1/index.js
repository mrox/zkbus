const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const docsRoute = require('./docs.route');
const deviceRoute = require('./device.route');
const historyRoute = require('./history.route');

const zkRoute = require('./zk.route');
const config = require('../../config/config');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/api/auth',
    route: authRoute,
  },
  {
    path: '/api/users',
    route: userRoute,
  },
  {
    path: '/iclock',
    route: zkRoute,
  },
  {
    path: '/api/devices',
    route: deviceRoute
  },
  {
    path: '/api/histories',
    route: historyRoute
  }
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
