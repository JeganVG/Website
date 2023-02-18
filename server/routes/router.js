const express = require('express')

const PartCtrl = require('../controllers/PartCtrl')


const router = express.Router()


router.post('/CreateParticipant', PartCtrl.createPart)

module.exports = router