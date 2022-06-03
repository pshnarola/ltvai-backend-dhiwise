/**
 * customerAccountsRoutes.js
 * @description :: CRUD API routes for customerAccounts
 */

const express = require('express');
const router = express.Router();
const customerAccountsController = require('../../controller/admin/customerAccountsController');
const { PLATFORM } =  require('../../constants/authConstant'); 
const auth = require('../../middleware/auth');
const checkRolePermission = require('../../middleware/checkRolePermission');

router.route('/admin/customeraccounts/create').post(auth(PLATFORM.ADMIN),checkRolePermission,customerAccountsController.addCustomerAccounts);
router.route('/admin/customeraccounts/addBulk').post(auth(PLATFORM.ADMIN),checkRolePermission,customerAccountsController.bulkInsertCustomerAccounts);
router.route('/admin/customeraccounts/list').post(auth(PLATFORM.ADMIN),checkRolePermission,customerAccountsController.findAllCustomerAccounts);
router.route('/admin/customeraccounts/count').post(auth(PLATFORM.ADMIN),checkRolePermission,customerAccountsController.getCustomerAccountsCount);
router.route('/admin/customeraccounts/:id').get(auth(PLATFORM.ADMIN),checkRolePermission,customerAccountsController.getCustomerAccounts);
router.route('/admin/customeraccounts/update/:id').put(auth(PLATFORM.ADMIN),checkRolePermission,customerAccountsController.updateCustomerAccounts);    
router.route('/admin/customeraccounts/partial-update/:id').put(auth(PLATFORM.ADMIN),checkRolePermission,customerAccountsController.partialUpdateCustomerAccounts);
router.route('/admin/customeraccounts/updateBulk').put(auth(PLATFORM.ADMIN),checkRolePermission,customerAccountsController.bulkUpdateCustomerAccounts);
router.route('/admin/customeraccounts/softDelete/:id').put(auth(PLATFORM.ADMIN),checkRolePermission,customerAccountsController.softDeleteCustomerAccounts);
router.route('/admin/customeraccounts/softDeleteMany').put(auth(PLATFORM.ADMIN),checkRolePermission,customerAccountsController.softDeleteManyCustomerAccounts);
router.route('/admin/customeraccounts/delete/:id').delete(auth(PLATFORM.ADMIN),checkRolePermission,customerAccountsController.deleteCustomerAccounts);
router.route('/admin/customeraccounts/deleteMany').post(auth(PLATFORM.ADMIN),checkRolePermission,customerAccountsController.deleteManyCustomerAccounts);

module.exports = router;
