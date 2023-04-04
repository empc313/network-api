const { Schema, model , Types} = require('mongoose');


const reactionSchema = new Schema( 
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
    }
)


const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlen: 1,
            maxlen: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            //GET DATE HERE
        },
        username: {
            type: String,
            required: true
        },
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
)

module.exports = thoughtSchema;