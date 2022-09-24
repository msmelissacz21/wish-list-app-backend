"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFavorites = void 0;
// const mongoose = require('mongoose')
const mongoose_1 = require("mongoose");
const userFavorites = new mongoose_1.Schema({
    name: { type: String, required: true },
    favorites: { type: [], required: false }
});
exports.UserFavorites = (0, mongoose_1.model)('UserFavorites', userFavorites);
