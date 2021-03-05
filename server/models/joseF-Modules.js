const mongoose = require('mongoose')
const Schema = mongoose.Schema
// give uniformity to the documents // 
const Profile = new Schema({

        bio: { type: String, required: false },

Music:{
        albulmName: {
                type: [String], required: true
            },
            selectedFile: {
                type: [String]
            },
        },
       
        noticias:{ type: String, required: false },

        tour:{ type: [String], required: false },
User:{
    username:{type: String},
    password:{type: String}
}
    })
// convert schema into a model //
module.exports = mongoose.model('profile',Profile)