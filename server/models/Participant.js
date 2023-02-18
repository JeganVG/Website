const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Participant = new Schema(
    {
        Name :{ type:String, required: true},
        Department : { type: String, required: true }
    },
    {collection:'Participants'}
)

module.exports = mongoose.model('Participants', Participant)