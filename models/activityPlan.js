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

planItemSchema.virtual('durationTotal').get(function() {
    return this.planItems.reduce((total, activity) => total + activity.extDuration, 0)
})

planItemSchema.virtual('totalQty').get(function() {
    return this.planItems.reduce((total, activity) => total + activity.qty, 0)
})

module.exports = mongoose.model('ActivityPlan', activityPlanSchema)