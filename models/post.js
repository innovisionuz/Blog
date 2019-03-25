const mongoose = require('mongoose')
const Schema = mongoose.Schema

var postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, 
{
    timestamps: true
})

postSchema.set('toJson', {
    virtuals: true
})

module.exports = mongoose.model("Post", postSchema)