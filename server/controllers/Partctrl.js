const Participant = require('../models/Participant')

createPart = (req, res) => {
    const body = req.body
    console.log(body)
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide all fields',
        })
    }

    const Part = new Participant(body)

    if (!Part) {
        return res.status(400).json({ success: false, error: err })
    }

    Part
        .save()
        .then(() => {
            return res.json({
                id: Part._id,
                message: 'Participant created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Participant not created!',
            })
        })
}

module.exports = {
    createPart
}