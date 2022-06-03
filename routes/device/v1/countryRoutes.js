/**
 * countryRoutes.js
 * @description :: CRUD API routes for country
 */

const express = require('express');
const router = express.Router();
const countryController = require('../../../controller/device/v1/countryController');
const { PLATFORM } =  require('../../../constants/authConstant'); 
const auth = require('../../../middleware/auth');

module.exports = router;
