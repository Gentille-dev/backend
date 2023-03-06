const mongoose = require('mongoose')

const ImageSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    image: {
        data: Buffer,
        contentType: String
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = ImageModel = mongoose.model('imageModel', ImageSchema)
