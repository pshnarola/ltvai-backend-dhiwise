/**
 * cityController.js
 * @description : exports action methods for city.
 */

const City = require('../../../model/city');
const citySchemaKey = require('../../../utils/validation/cityValidation');
const validation = require('../../../utils/validateRequest');
const dbService = require('../../../utils/dbService');
const ObjectId = require('mongodb').ObjectId;
const deleteDependentService = require('../../../utils/deleteDependent');
const utils = require('../../../utils/common');

module.exports = {};