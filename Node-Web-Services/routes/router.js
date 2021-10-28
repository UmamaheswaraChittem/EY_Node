const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller.js');

/************************* TMF WEB SERVICES ********************************/

router.get('/v1/getUniversitiesDetails', function (req, res, next) {
    controller.getUniversitiesDetails(req, res, next);
});

/************************* TMF WEB SERVICES *******************************/

module.exports = router;