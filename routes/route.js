var express=require('express');
const route=express.Router();
var userController=require('../src/user/userController')


route.route('/user/getAll').get(userController.getAllDataControlllerfn);
route.route('/user/Create').post(userController.createControlllerfn);
route.route('/user/Update/:id').patch(userController.updateControlllerfn);
route.route('/user/remove/:id').delete(userController.deleteControlllerfn);

module.exports=route;