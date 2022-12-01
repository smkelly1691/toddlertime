const mongoose = require('mongoose');
require('./category');
const activitySchema = require('./activitySchema');


module.exports = mongoose.model('Activity', activitySchema);