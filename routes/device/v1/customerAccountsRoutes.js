/**
 * customerAccountsRoutes.js
 * @description :: CRUD API routes for customerAccounts
 */

const express = require('express');
const router = express.Router();
const customerAccountsController = require('../../../controller/device/v1/customerAccountsController');
const { PLATFORM } =  require('../../../constants/authConstant'); 
const auth = require('../../../middleware/auth');

module.exports = router;
