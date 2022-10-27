const express = require('express');
const router = express.Router();
const sacuesCtrl = require('../controllers/sauces');


router.post('/', sacuesCtrl.createSauce); 

  router.get('/:id', sacuesCtrl.getOneSauce);

  router.put('/:id', sacuesCtrl.modifySauce);

  router.delete('/:id', sacuesCtrl.deleteSauces);


router.get('/', sacuesCtrl.getAllsauces);

module.exports = router;