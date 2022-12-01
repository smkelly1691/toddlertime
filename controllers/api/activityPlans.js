const ActivityPlan = require('../../models/activityPlan');
const { remove } = require('../../models/activitySchema');
// const Activity = require('../../models/activity');

module.exports = {
    myplan,
    addToPlan,
    markComplete,
    history,
    deleteFromPlan
}

async function history(req, res) {
    const activityPlans = await ActivityPlan.find({user: req.user._id, isComplete: true}).sort('-startDate');
    res.json(activityPlans);
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
    myplan.planItems.isComplete = true;
    await myplan.save();
    res.json(myplan);
}

async function deleteFromPlan(req, res) {
    const myplan = await ActivityPlan.getMyplan(req.user._id);
    myplan.planItems.remove(req.params.id);
    await myplan.save();
    res.json(myplan);
}