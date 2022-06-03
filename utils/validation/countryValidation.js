/**
 * countryValidation.js
 * @description :: validate each post and put request as per country model
 */

const joi = require('joi');
const {
  options, isCountOnly, populate, select 
} = require('./commonFilterValidation');

/** validation keys and properties of country */
exports.schemaKeys = joi.object({
  name: joi.string().allow(null).allow(''),
  code: joi.string().allow(null).allow(''),
  isDeleted: joi.boolean(),
  isActive: joi.boolean(),
  iso3: joi.string().allow(null).allow(''),
  countryId: joi.string().allow(null).allow(''),
  emojiU: joi.string().allow(null).allow(''),
  flag: joi.string().allow(null).allow('')
}).unknown(true);

/** validation keys and properties of country for updation */
exports.updateSchemaKeys = joi.object({
  name: joi.string().allow(null).allow(''),
  code: joi.string().allow(null).allow(''),
  isDeleted: joi.boolean(),
  isActive: joi.boolean(),
  iso3: joi.string().allow(null).allow(''),
  countryId: joi.string().allow(null).allow(''),
  emojiU: joi.string().allow(null).allow(''),
  flag: joi.string().allow(null).allow(''),
  _id: joi.string().regex(/^[0-9a-fA-F]{24}$/)
}).unknown(true);

let keys = ['query', 'where'];
/** validation keys and properties of country for filter documents from collection */
exports.findFilterKeys = joi.object({
  options: options,
  ...Object.fromEntries(
    keys.map(key => [key, joi.object({
      name: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      code: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      isDeleted: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      isActive: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      iso3: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      countryId: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      emojiU: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      flag: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      id: joi.any(),
      _id: joi.alternatives().try(joi.array().items(),joi.string().regex(/^[0-9a-fA-F]{24}$/),joi.object())
    }).unknown(true),])
  ),
  isCountOnly: isCountOnly,
  populate: joi.array().items(populate),
  select: select
    
}).unknown(true);
