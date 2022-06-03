/**
 * cityRoutes.js
 * @description :: CRUD API routes for city
 */

const express = require('express');
const router = express.Router();
const cityController = require('../../../controller/device/v1/cityController');
const { PLATFORM } =  require('../../../constants/authConstant'); 
const auth = require('../../../middleware/auth');

module.exports = router;
