const express = require('express')

const JoseFCtrl = require('../controllers/joseF-ctrl')

const router = express.Router()

router.get('/', JoseFCtrl.getData);
router.post('/profile', JoseFCtrl.createPost);
router.put('/profile/:id', JoseFCtrl.updateData)
router.delete('/profile/:id', JoseFCtrl.deleteData)

module.exports = router