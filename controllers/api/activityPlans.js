const ActivityPlan = require('../../models/activityPlan');

module.exports = {
    myplan,
}

async function myplan(req, res) {
    const myplan = await ActivityPlan.getMyplan(req.user._id)
    res.json(myplan)
}
