const Profile = require('../models/joseF-Modules')

const createPost = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide data',
        })
    }

    const profile = new Profile(body)

    if (!profile) {
        return res.status(400).json({ success: false })
    }

    profile
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: profile._id,
                message: 'data created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'data not created!',
            })
        })
}

const  updateData = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Profile.findOne({ _id: req.params.id }, (err, profile) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Profile not found!',
            })
        }
        profile.bio = body.bio
        profile.albulmName = body.albulmName
        profile.selectedFile = body.selectedFile
        profile.noticias = body.noticias
        profile.tour = body.tour
        profile
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: profile._id,
                    message: 'Profile updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Profile not updated!',
                })
            })
    })
}

const deleteData = async (req, res) => {
    await Profile.findOneAndDelete({ _id: req.params.id }, (err, profile) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!profile) {
            return res
                .status(404)
                .json({ success: false, error: `data not found` })
        }

        return res.status(200).json({ success: true, data: profile })
    }).catch(err => console.log(err))
}

const getData = async (req, res) => {
    await Profile.find({}, (err, profile) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!profile.length) {
            return res
                .status(404)
                .json({ success: false, error: `data not found` })
        }
        return res.status(200).json({ success: true, data: profile })
    }).catch(err => console.log(err))
}

module.exports = {
    getData,
    deleteData,
    updateData,
    createPost,
}

