const mongoose = require("mongoose");

const userModel = mongoose.Schema(
    {
        username: {
            type: String,
            trim: true,
            required: true
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true
        },
        pic: {
            type: String,
            required: true,
            default: "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png"
        }
    },
    {
        timestamps: true
    }
)

const User = mongoose.model("user", userModel);

module.exports = User;