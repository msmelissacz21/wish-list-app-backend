"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const favoritesSchema = new mongoose_1.Schema({
    image: { type: String, required: true },
    manufacturer: { type: String },
    name: { type: String, required: true },
    regularPrice: { type: String },
    salePrice: { type: String },
    shortDescription: { type: String },
    sku: { type: String },
    url: { type: String }
});
favoritesSchema.methods.showFavorites = function () {
    return `${this.name} ${this.image}, ${this.regularPrice} ${this.salePrice}.`;
};
module.exports = (0, mongoose_1.model)('Favorites', favoritesSchema);
