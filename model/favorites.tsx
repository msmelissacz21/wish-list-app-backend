import { Schema, model } from "mongoose"

const favoritesSchema = new Schema<IFavorite>({
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

module.exports = model('Favorites', favoritesSchema)