const express = require('express');
const router = express.Router();
const activityPlansCtrl = require('../../controllers/api/activityPlans');

// GET and POST requests go HERE
router.get('/myplan', activityPlansCtrl.myplan);

module.exports = router;