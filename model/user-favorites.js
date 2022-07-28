const mongoose = require('mongoose')

const userFavorites = new mongoose.Schema({
    userId: { type: String, required: true},
    favorites: { type: [], required: false}
})
  
module.exports = mongoose.model('UserFavorites', userFavorites)