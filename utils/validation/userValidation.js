/**
 * userValidation.js
 * @description :: validate each post and put request as per user model
 */

const joi = require('joi');
const {
  options, isCountOnly, populate, select 
} = require('./commonFilterValidation');
const authConstantDefault = require('../../constants/authConstant');    
const { USER_TYPES } = require('../../constants/authConstant');
const { convertObjectToEnum } = require('../common');   

/** validation keys and properties of user */
exports.schemaKeys = joi.object({
  username: joi.string().allow(null).allow(''),
  email: joi.string().trim().allow(null).allow(''),
  password: joi.string().allow(null).allow(''),
  clientId: joi.string().allow(null).allow(''),
  userType: joi.number().allow(0),
  isActive: joi.boolean(),
  isDeleted: joi.boolean(),
  mobileNo: joi.string().allow(null).allow(''),
  forgotPasswordToken: joi.string().default(null).allow(null).allow(''),
  emailVerified: joi.boolean().default(false),
  resetPasswordLink: joi.object({
    code:joi.string(),
    expireTime:joi.date().options({ convert: true })
  }),
  loginRetryLimit: joi.number().integer().allow(0),
  loginReactiveTime: joi.date().options({ convert: true }).allow(null).allow(''),
  firstName: joi.string().allow(null).allow(''),
  lastName: joi.string().allow(null).allow(''),
  telephone: joi.string().allow(null).allow(''),
  telephoneCountryCode: joi.string().allow(null).allow(''),
  address1: joi.string().allow(null).allow(''),
  address2: joi.string().allow(null).allow(''),
  country: joi.string().regex(/^[0-9a-fA-F]{24}$/).allow(null).allow(''),
  state: joi.string().regex(/^[0-9a-fA-F]{24}$/).allow(null).allow(''),
  city: joi.string().regex(/^[0-9a-fA-F]{24}$/).allow(null).allow(''),
  isEnableTwoFactorAuth: joi.boolean(),
  postalCode: joi.string().allow(null).allow(''),
  companyName: joi.string().allow(null).allow(''),
  weeklyMetrics: joi.boolean(),
  platformUpdates: joi.boolean(),
  dnsRecords: joi.array().items(joi.object()),
  replyToEmail: joi.string().allow(null).allow(''),
  isDomainVerified: joi.boolean(),
  apiKey: joi.string().allow(null).allow(''),
  domain: joi.string().allow(null).allow('')
}).unknown(true);

/** validation keys and properties of user for updation */
exports.updateSchemaKeys = joi.object({
  username: joi.string().allow(null).allow(''),
  email: joi.string().trim().allow(null).allow(''),
  password: joi.string().allow(null).allow(''),
  clientId: joi.string().allow(null).allow(''),
  userType: joi.number().allow(0),
  isActive: joi.boolean(),
  isDeleted: joi.boolean(),
  mobileNo: joi.string().allow(null).allow(''),
  forgotPasswordToken: joi.string().default(null).allow(null).allow(''),
  emailVerified: joi.boolean().default(false),
  resetPasswordLink: joi.object({
    code:joi.string(),
    expireTime:joi.date().options({ convert: true })
  }),
  loginRetryLimit: joi.number().integer().allow(0),
  loginReactiveTime: joi.date().options({ convert: true }).allow(null).allow(''),
  firstName: joi.string().allow(null).allow(''),
  lastName: joi.string().allow(null).allow(''),
  telephone: joi.string().allow(null).allow(''),
  telephoneCountryCode: joi.string().allow(null).allow(''),
  address1: joi.string().allow(null).allow(''),
  address2: joi.string().allow(null).allow(''),
  country: joi.string().regex(/^[0-9a-fA-F]{24}$/).allow(null).allow(''),
  state: joi.string().regex(/^[0-9a-fA-F]{24}$/).allow(null).allow(''),
  city: joi.string().regex(/^[0-9a-fA-F]{24}$/).allow(null).allow(''),
  isEnableTwoFactorAuth: joi.boolean(),
  postalCode: joi.string().allow(null).allow(''),
  companyName: joi.string().allow(null).allow(''),
  weeklyMetrics: joi.boolean(),
  platformUpdates: joi.boolean(),
  dnsRecords: joi.array().items(joi.object()),
  replyToEmail: joi.string().allow(null).allow(''),
  isDomainVerified: joi.boolean(),
  apiKey: joi.string().allow(null).allow(''),
  domain: joi.string().allow(null).allow(''),
  _id: joi.string().regex(/^[0-9a-fA-F]{24}$/)
}).unknown(true);

let keys = ['query', 'where'];
/** validation keys and properties of user for filter documents from collection */
exports.findFilterKeys = joi.object({
  options: options,
  ...Object.fromEntries(
    keys.map(key => [key, joi.object({
      username: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      email: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      password: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      clientId: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      isActive: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      isDeleted: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      mobileNo: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      forgotPasswordToken: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      emailVerified: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      loginRetryLimit: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
      loginReactiveTime: joi.alternatives().try(joi.array().items(),joi.date().options({ convert: true }),joi.object()),
      firstName: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      lastName: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      telephone: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      telephoneCountryCode: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      address1: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      address2: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      country: joi.alternatives().try(joi.array().items(),joi.string().regex(/^[0-9a-fA-F]{24}$/),joi.object()),
      state: joi.alternatives().try(joi.array().items(),joi.string().regex(/^[0-9a-fA-F]{24}$/),joi.object()),
      city: joi.alternatives().try(joi.array().items(),joi.string().regex(/^[0-9a-fA-F]{24}$/),joi.object()),
      isEnableTwoFactorAuth: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      postalCode: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      companyName: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      weeklyMetrics: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      platformUpdates: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      replyToEmail: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      isDomainVerified: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      apiKey: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      domain: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      id: joi.any(),
      _id: joi.alternatives().try(joi.array().items(),joi.string().regex(/^[0-9a-fA-F]{24}$/),joi.object())
    }).unknown(true),])
  ),
  isCountOnly: isCountOnly,
  populate: joi.array().items(populate),
  select: select
    
}).unknown(true);
