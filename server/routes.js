const router = require('express').Router();
const tripController = require('./controllers/tripController');


router.use('/racing/create', tripController);


module.exports = router;