const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Pet2Schema = new Schema ({
    avatar: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
})

// const Pet2Schema = new Schema ({
//     avatar: {
//         type: String,
//         required: true,
//     },
//     type: {
//         type: String,
//         required: true,
//     },
//     gender: {
//         type: String,
//         required: true,
//     },
//     name: {
//         type: String,
//         required: true,
//     },
//     age: {
//         type: String,
//         required: true,
//     },
//     breeds: {
//         type: Array,
//         required: true,
//     },
//     weight: {
//         type: Number,
//         required: true,
//     },
//     height: {
//         type: Number,
//         required: true,
//     },
//     sterilized: {
//         type: Boolean,
//         required: true,
//     },
//     vaccinated: {
//         type: Boolean,
//         required: true,
//     },
//     features:{
//         type: Array,
//         required: true,
//     },
//     bio: {
//         type: String,
//         required: true,
//     },
//     shelter: {
//         type: Object,
//         required: true,
//     },
// })

module.exports = mongoose.model('Pet2', Pet2Schema)