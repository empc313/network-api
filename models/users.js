const {Schema, model} = require('mongoose');

const usersSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        email: {},
        thoughts:[{}],
        friends: [{}],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false
    }
)



module.export = users;