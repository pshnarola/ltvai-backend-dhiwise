/**
 * customerAccountsController.js
 * @description : exports action methods for customerAccounts.
 */

const CustomerAccounts = require('../../../model/customerAccounts');
const customerAccountsSchemaKey = require('../../../utils/validation/customerAccountsValidation');
const validation = require('../../../utils/validateRequest');
const dbService = require('../../../utils/dbService');
const ObjectId = require('mongodb').ObjectId;
const utils = require('../../../utils/common');

module.exports = {};