const ActivityPlan = require('../../models/activityPlan');
const Activity = require('../../models/activity');

module.exports = {
    myplan,
    addToPlan,
    markComplete,
}

async function myplan(req, res) {
    const myplan = await ActivityPlan.getMyplan(req.user._id)
    res.json(myplan)
}

async function addToPlan(req, res) {
    const myplan = await ActivityPlan.getMyplan(req.user._id);
    await myplan.addActivityToPlan(req.params.id);
    res.json(myplan)
}

async function markComplete(req, res) {
    const myplan = await ActivityPlan.getMyplan(req.user._id);
    myplan.isComplete = true;
    await myplan.save();
    res.json(myplan);
}