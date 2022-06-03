/**
 * customerAccountsValidation.js
 * @description :: validate each post and put request as per customerAccounts model
 */

const joi = require('joi');
const {
  options, isCountOnly, populate, select 
} = require('./commonFilterValidation');

/** validation keys and properties of customerAccounts */
exports.schemaKeys = joi.object({
  customerFirstName: joi.string().allow(null).allow(''),
  customerLastName: joi.string().allow(null).allow(''),
  customerEmail: joi.string().allow(null).allow(''),
  customerEnrollmentDate: joi.string().allow(null).allow(''),
  customerAccountType: joi.string().allow(null).allow(''),
  customerTelPrimary: joi.string().allow(null).allow(''),
  customerTelPrimaryCountryCode: joi.string().allow(null).allow(''),
  customerTelPrimaryType: joi.string().allow(null).allow(''),
  customerTelSecondary: joi.string().allow(null).allow(''),
  customerTelSecondaryCountryCode: joi.string().allow(null).allow(''),
  customerTelSecondaryType: joi.string().allow(null).allow(''),
  customerCountry: joi.string().allow(null).allow(''),
  clientID: joi.string().allow(null).allow(''),
  outreachStatus: joi.string().allow(null).allow(''),
  outreachSuppressionDate: joi.string().allow(null).allow(''),
  isDeleted: joi.boolean(),
  isActive: joi.boolean()
}).unknown(true);

/** validation keys and properties of customerAccounts for updation */
exports.updateSchemaKeys = joi.object({
  customerFirstName: joi.string().allow(null).allow(''),
  customerLastName: joi.string().allow(null).allow(''),
  customerEmail: joi.string().allow(null).allow(''),
  customerEnrollmentDate: joi.string().allow(null).allow(''),
  customerAccountType: joi.string().allow(null).allow(''),
  customerTelPrimary: joi.string().allow(null).allow(''),
  customerTelPrimaryCountryCode: joi.string().allow(null).allow(''),
  customerTelPrimaryType: joi.string().allow(null).allow(''),
  customerTelSecondary: joi.string().allow(null).allow(''),
  customerTelSecondaryCountryCode: joi.string().allow(null).allow(''),
  customerTelSecondaryType: joi.string().allow(null).allow(''),
  customerCountry: joi.string().allow(null).allow(''),
  clientID: joi.string().allow(null).allow(''),
  outreachStatus: joi.string().allow(null).allow(''),
  outreachSuppressionDate: joi.string().allow(null).allow(''),
  isDeleted: joi.boolean(),
  isActive: joi.boolean(),
  _id: joi.string().regex(/^[0-9a-fA-F]{24}$/)
}).unknown(true);

let keys = ['query', 'where'];
/** validation keys and properties of customerAccounts for filter documents from collection */
exports.findFilterKeys = joi.object({
  options: options,
  ...Object.fromEntries(
    keys.map(key => [key, joi.object({
      customerFirstName: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      customerLastName: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      customerEmail: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      customerEnrollmentDate: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      customerAccountType: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      customerTelPrimary: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      customerTelPrimaryCountryCode: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      customerTelPrimaryType: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      customerTelSecondary: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      customerTelSecondaryCountryCode: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      customerTelSecondaryType: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      customerCountry: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      clientID: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      outreachStatus: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      outreachSuppressionDate: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      isDeleted: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      isActive: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      id: joi.any(),
      _id: joi.alternatives().try(joi.array().items(),joi.string().regex(/^[0-9a-fA-F]{24}$/),joi.object())
    }).unknown(true),])
  ),
  isCountOnly: isCountOnly,
  populate: joi.array().items(populate),
  select: select
    
}).unknown(true);
