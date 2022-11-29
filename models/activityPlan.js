const mongoose = require('mongoose')
const Schema = mongoose.Schema
const activitySchema = require('./activitySchema')

const planItemSchema = new Schema({
    qty: { type: Number, default: 1 },
    activity: activitySchema,
}, {
    timestamps: true,
    toJSON: { virtuals: true }
})

planItemSchema.virtual('extDuration').get(function() {
    return this.qty * this.activity.duration
})

const activityPlanSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId, 
        ref: 'User', 
        required: true
    },
    startDate: {
        type: Date,
        default: Date.now(),
        required: true
    },
    planItems: [planItemSchema],
    isComplete: {
        type: Boolean,
        default: false
    },
}, {
    timestamps: true,
    toJSON: { virtuals: true }
})

activityPlanSchema.virtual('durationTotal').get(function() {
    return this.planItems.reduce((total, activity) => total + activity.extDuration, 0)
})

activityPlanSchema.virtual('totalQty').get(function() {
    return this.planItems.reduce((total, activity) => total + activity.qty, 0)
})

activityPlanSchema.virtual('planId').get(function() {
    return this.id.slice(-6).toUpperCase()
})

activityPlanSchema.statics.getMyplan = function(userId) {
    return this.findOneAndUpdate(
        { user: userId, isComplete: false },
        { user: userId },
        { upsert: true, new: true }
    );
};

module.exports = mongoose.model('ActivityPlan', activityPlanSchema)