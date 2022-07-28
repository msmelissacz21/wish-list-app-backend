const mongoose = require('mongoose')

const favoritesSchema = new mongoose.Schema({
  image: { type: String, required: true },
  manufacturer: { type: String },
  name: { type: String, required: true },
  regularPrice: { type: String },
  salePrice: { type: String },
  shortDescription: { type: String },
  sku: { type: String },
  url: { type: String }
})



favoritesSchema.methods.showFavorites = function() {
  return `${this.name} ${this.image}, ${this.regularPrice} ${this.salePrice}.`
}

module.exports = mongoose.model('Favorites', favoritesSchema)