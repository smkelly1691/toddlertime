const ActivityPlan = require('../../models/activityPlan');

module.exports = {
    myplan,
    addToPlan,
}

async function myplan(req, res) {
    const myplan = await ActivityPlan.getMyplan(req.user._id)
    res.json(myplan)
}

async function addToPlan(req, res) {
    const myplan = await ActivityPlan.getMyplan(req.user._id)
    await myplan.addActivityToPlan(req.params.id)
    res.json(myplan)
}