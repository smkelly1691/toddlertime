const Schema = require('mongoose').Schema;

const activitySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },
    description: {
        type: String
    },
    duration: {
        type: Number,
        required: true
    }
}, {
    timestamps: true,
    toJSON: { virtuals: true }
});

activitySchema.virtual('activityId').get(function() {
    return this.id.slice(-6).toUpperCase()
})

module.exports = activitySchema;