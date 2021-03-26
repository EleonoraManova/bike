const express = require('express');

const DestinationCtrl = require('../controllers/destination-controller');

const router = express.Router();

router.get('/destinations', DestinationCtrl.getDestination);

module.exports = router;