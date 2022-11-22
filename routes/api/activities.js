const express = require('express');
const router = express.Router();
const activitiesCtrl = require('../../controllers/api/activities');

router.get('/', activitiesCtrl.index);
router.get('/id', activitiesCtrl.show);

module.exports = router;