const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TokenSchema = new Schema ({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    }
    refreshTocken: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Token', TokenSchema)