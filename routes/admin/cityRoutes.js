/**
 * cityRoutes.js
 * @description :: CRUD API routes for city
 */

const express = require('express');
const router = express.Router();
const cityController = require('../../controller/admin/cityController');
const { PLATFORM } =  require('../../constants/authConstant'); 
const auth = require('../../middleware/auth');

router.route('/admin/city/create').post(cityController.addCity);
router.route('/admin/city/addBulk').post(cityController.bulkInsertCity);
router.route('/admin/city/list').post(cityController.findAllCity);
router.route('/admin/city/count').post(cityController.getCityCount);
router.route('/admin/city/:id').get(cityController.getCity);
router.route('/admin/city/update/:id').put(cityController.updateCity);    
router.route('/admin/city/partial-update/:id').put(cityController.partialUpdateCity);
router.route('/admin/city/updateBulk').put(cityController.bulkUpdateCity);
router.route('/admin/city/softDelete/:id').put(cityController.softDeleteCity);
router.route('/admin/city/softDeleteMany').put(cityController.softDeleteManyCity);
router.route('/admin/city/delete/:id').delete(cityController.deleteCity);
router.route('/admin/city/deleteMany').post(cityController.deleteManyCity);

module.exports = router;
