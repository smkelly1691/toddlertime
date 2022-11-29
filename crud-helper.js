// Connect to the database
require('dotenv').config();
require('./config/database');
mongoose.connect(process.env.DATABASE_URL);


// Require the Mongoose models
const User = require('./models/user');
const Activity = require('./models/activity');
const Category = require('./models/category');
const Order = require('./models/activityPlan');

// Local variables will come in handy for holding retrieved documents
let user, activity, category, activityPlan;
let users, activities, categories, activityPlans;
