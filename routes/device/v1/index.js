/**
 * index.js
 * @description :: index route file of device platform.
 */

const express =  require('express');
const router =  express.Router();
router.use('/device/auth',require('./auth'));
router.use(require('./cityRoutes'));
router.use(require('./stateRoutes'));
router.use(require('./countryRoutes'));
router.use(require('./customerAccountsRoutes'));
router.use(require('./userRoutes'));

module.exports = router;
