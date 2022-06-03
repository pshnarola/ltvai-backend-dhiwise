/**
 * stateValidation.js
 * @description :: validate each post and put request as per state model
 */

const joi = require('joi');
const {
  options, isCountOnly, populate, select 
} = require('./commonFilterValidation');

/** validation keys and properties of state */
exports.schemaKeys = joi.object({
  name: joi.string().allow(null).allow(''),
  countryId: joi.string().allow(null).allow(''),
  isDeleted: joi.boolean(),
  isActive: joi.boolean(),
  country_code: joi.string().allow(null).allow(''),
  country_name: joi.string().allow(null).allow(''),
  state_code: joi.string().allow(null).allow(''),
  stateId: joi.string().allow(null).allow('')
}).unknown(true);

/** validation keys and properties of state for updation */
exports.updateSchemaKeys = joi.object({
  name: joi.string().allow(null).allow(''),
  countryId: joi.string().allow(null).allow(''),
  isDeleted: joi.boolean(),
  isActive: joi.boolean(),
  country_code: joi.string().allow(null).allow(''),
  country_name: joi.string().allow(null).allow(''),
  state_code: joi.string().allow(null).allow(''),
  stateId: joi.string().allow(null).allow(''),
  _id: joi.string().regex(/^[0-9a-fA-F]{24}$/)
}).unknown(true);

let keys = ['query', 'where'];
/** validation keys and properties of state for filter documents from collection */
exports.findFilterKeys = joi.object({
  options: options,
  ...Object.fromEntries(
    keys.map(key => [key, joi.object({
      name: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      countryId: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      isDeleted: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      isActive: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      country_code: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      country_name: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      state_code: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      stateId: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      id: joi.any(),
      _id: joi.alternatives().try(joi.array().items(),joi.string().regex(/^[0-9a-fA-F]{24}$/),joi.object())
    }).unknown(true),])
  ),
  isCountOnly: isCountOnly,
  populate: joi.array().items(populate),
  select: select
    
}).unknown(true);
