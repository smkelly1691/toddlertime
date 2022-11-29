const express = require('express');
const router = express.Router();
const activityPlansCtrl = require('../../controllers/api/activityPlans');

// GET and POST requests go HERE
router.get('/myplan', activityPlansCtrl.myplan);
router.post('/myplan/activities/:id', activityPlansCtrl.addToPlan);
router.post('/myplan/markComplete', activityPlansCtrl.markComplete);

module.exports = router;