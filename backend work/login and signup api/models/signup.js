const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const signupSchema = new Schema({
    _id:{
        type: Number,
        required: true,
    },
    username:{
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    no:{
        type: Number,
        required: true,
    }
    });
module.exports = mongoose.model("signup", signupSchema);