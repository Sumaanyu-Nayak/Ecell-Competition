const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postsSchema = new Schema({
    _id:{
        type: Number,
        required: true,
    },
    username:{
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    no:{
        type: Number,
        required: true,
    }
    });
module.exports = mongoose.model("posts", postsSchema);