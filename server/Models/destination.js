
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Destination = new Schema(
    {
        category: { type: String, required: true },
        image: { type: Image, required: true },
        description: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('Destinations', Destination)