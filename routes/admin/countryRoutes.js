/**
 * countryRoutes.js
 * @description :: CRUD API routes for country
 */

const express = require('express');
const router = express.Router();
const countryController = require('../../controller/admin/countryController');
const { PLATFORM } =  require('../../constants/authConstant'); 
const auth = require('../../middleware/auth');

router.route('/admin/country/create').post(countryController.addCountry);
router.route('/admin/country/addBulk').post(countryController.bulkInsertCountry);
router.route('/admin/country/list').post(countryController.findAllCountry);
router.route('/admin/country/count').post(countryController.getCountryCount);
router.route('/admin/country/:id').get(countryController.getCountry);
router.route('/admin/country/update/:id').put(countryController.updateCountry);    
router.route('/admin/country/partial-update/:id').put(countryController.partialUpdateCountry);
router.route('/admin/country/updateBulk').put(countryController.bulkUpdateCountry);
router.route('/admin/country/softDelete/:id').put(countryController.softDeleteCountry);
router.route('/admin/country/softDeleteMany').put(countryController.softDeleteManyCountry);
router.route('/admin/country/delete/:id').delete(countryController.deleteCountry);
router.route('/admin/country/deleteMany').post(countryController.deleteManyCountry);

module.exports = router;
