const mongoose = require('mongoose')

const userFavorites = new mongoose.Schema({
    name: { type: String, required: true},
    favorites: { type: [], required: false}
})
  
module.exports = mongoose.model('UserFavorites', userFavorites)