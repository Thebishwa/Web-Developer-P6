//setup sauces router 
const express = require('express');
const router = express.Router();

//import multer with token authorization functon from middleware 
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

//import Sauces functions from controllers
const saucesCtrl = require('../controllers/sauces');

//sets up endpoints for sauces 
router.post('/', auth, multer, saucesCtrl.createSauce);
router.get('/', auth, multer, saucesCtrl.getAllSauces);
router.get('/:id', auth, saucesCtrl.getOneSauce);
router.put('/:id', auth, multer, saucesCtrl.modifySauce);
router.delete('/:id', auth, multer, saucesCtrl.deleteSauce);
router.post('/:id/like', auth, saucesCtrl.updateLikeStatus);

//navigate router
module.exports = router;