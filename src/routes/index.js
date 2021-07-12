var express = require('express');
var router = express.Router();

var cotizadorController = require('../controllers/index');

/* GET home page. */
router.get('/', cotizadorController.home);
router.get('/esp', cotizadorController.esp);
router.get('/eng', cotizadorController.eng);

module.exports = router;