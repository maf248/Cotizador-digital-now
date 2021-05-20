var express = require('express');
var router = express.Router();

var cotizadorController = require('../controllers/index');

/* GET home page. */
router.get('/', cotizadorController.home);

module.exports = router;