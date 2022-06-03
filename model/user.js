/**
 * user.js
 * @description :: model of a database collection user
 */

const mongoose = require('mongoose');
const seriesService = require('../services/seriesService');
const mongoosePaginate = require('mongoose-paginate-v2');
let idValidator = require('mongoose-id-validator');
const uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require('bcrypt');
const { USER_TYPES } = require('../constants/authConstant');
const { convertObjectToEnum } = require('../utils/common');
const authConstantEnum = require('../constants/authConstant');
        
const myCustomLabels = {
  totalDocs: 'itemCount',
  docs: 'data',
  limit: 'perPage',
  page: 'currentPage',
  nextPage: 'next',
  prevPage: 'prev',
  totalPages: 'pageCount',
  pagingCounter: 'slNo',
  meta: 'paginator',
};
mongoosePaginate.paginate.options = { customLabels: myCustomLabels };
const Schema = mongoose.Schema;
const schema = new Schema(
  {

    username:{ type:String },

    email:{
      type:String,
      lowercase:true,
      trim:true,
      unique:true,
      required:false,
      uniqueCaseInsensitive:true
    },

    password:{ type:String },

    clientId:{ type:String },

    userType:{
      type:Number,
      enum:convertObjectToEnum(USER_TYPES),
      required:true
    },

    isActive:{ type:Boolean },

    isDeleted:{ type:Boolean },

    mobileNo:{ type:String },

    forgotPasswordToken:{
      type:String,
      default:null
    },

    emailVerified:{
      type:Boolean,
      default:false
    },

    resetPasswordLink:{
      code:String,
      expireTime:Date
    },

    loginRetryLimit:{
      type:Number,
      default:0
    },

    loginReactiveTime:{ type:Date },

    firstName:{ type:String },

    lastName:{ type:String },

    telephone:{ type:String },

    telephoneCountryCode:{ type:String },

    address1:{ type:String },

    address2:{ type:String },

    country:{
      type:Schema.Types.ObjectId,
      ref:'country'
    },

    state:{
      type:Schema.Types.ObjectId,
      ref:'state'
    },

    city:{
      type:Schema.Types.ObjectId,
      ref:'city'
    },

    isEnableTwoFactorAuth:{ type:Boolean },

    postalCode:{ type:String },

    companyName:{ type:String },

    weeklyMetrics:{ type:Boolean },

    platformUpdates:{ type:Boolean },

    dnsRecords:[{
      _id:false,
      type:{ type:String },
      host:{ type:String },
      value:{ type:String }
    }],

    replyToEmail:{ type:String },

    isDomainVerified:{ type:Boolean },

    apiKey:{ type:String },

    domain:{ type:String },

    createdAt:{ type:Date },

    updatedAt:{ type:Date }
  }
  ,{ 
    timestamps: { 
      createdAt: 'createdAt', 
      updatedAt: 'updatedAt' 
    } 
  }
);
schema.pre('save', async function (next) {
  this.isDeleted = false;
  this.isActive = true;
  this.clientId = await seriesService.getNextSequenceString('user','clientId');
  if (this.password){
    this.password = await bcrypt.hash(this.password, 8);
  }
  next();
});

schema.pre('insertMany', async function (next, docs) {
  if (docs && docs.length){
    for (let index = 0; index < docs.length; index++) {
      const element = docs[index];
      element.isDeleted = false;
      element.isActive = true;
      element.clientId = await seriesService.getNextSequenceString('user','clientId');
    }
  }
  next();
});

schema.methods.isPasswordMatch = async function (password) {
  const user = this;
  return bcrypt.compare(password, user.password);
};
schema.method('toJSON', function () {
  const {
    _id, __v, ...object 
  } = this.toObject({ virtuals:true });
  object.id = _id;
  delete object.password;
     
  return object;
});
schema.plugin(mongoosePaginate);
schema.plugin(idValidator);
schema.plugin(uniqueValidator,{ message: 'Error, expected {VALUE} to be unique.' });
const user = mongoose.model('user',schema);
module.exports = user;