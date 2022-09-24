"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_favorites_1 = require("../model/user-favorites");
const router = require('express').Router();
const { route } = require('express/lib/application');
// GET is used to retrieve the wishlist data
router.get('/user-favorites/name/:name', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let f = yield user_favorites_1.UserFavorites.findOne({ name: req.params.name }).then();
        console.log('test');
        console.log(f);
        res.set('Access-Control-Allow-Origin', '*');
        res.send(f);
    }
    catch (err) {
        if (`{:name}` === undefined) {
            console.log('Name does not exist');
        }
        else {
            console.log(err);
            res.set('Access-Control-Allow-Origin', '*');
            res.status(500).json({ 'message': '' });
        }
    }
}));
// POST is used to create a new entity
// This creates a new wishlist
router.post('/user-favorites/name/:name', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        user_favorites_1.UserFavorites.create({ name: req.params.name, favorites: [] }).then();
        res.set('Access-Control-Allow-Origin', '*');
        res.send();
    }
    catch (err) {
        console.log(err);
        res.set('Access-Control-Allow-Origin', '*');
        res.status(500).json({ 'message': 'Something went wrong' });
    }
}));
// PUT method is used to update an existing wishlist
router.put('/user-favorites/name/:name', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        user_favorites_1.UserFavorites.findOneAndUpdate({ name: req.params.name }, { favorites: req.body }).then();
        res.set('Access-Control-Allow-Origin', '*');
        res.send();
    }
    catch (err) {
        if (`{:name}` === undefined) {
            console.log('Name does not exist');
            res.set('Access-Control-Allow-Origin', '*');
            res.status(500).json({ 'message': 'Name does not exist' });
        }
        else {
            console.log(err);
            res.set('Access-Control-Allow-Origin', '*');
            res.status(500).json({ 'message': 'Something went wrong' });
        }
    }
}));
//  DELETE method to delete a wishlist item
router.delete('/user-favorites/name/:name', (req, res) => {
    try {
        user_favorites_1.UserFavorites.findOneAndDelete({ name: req.params.name }).then();
        res.set('Access-Control-Allow-Origin', '*');
        res.send();
    }
    catch (err) {
        if (`{:name}` === undefined) {
            console.log('Name does not exist');
            res.set('Access-Control-Allow-Origin', '*');
            res.status(500).json({ 'message': 'Name does not exist' });
        }
        else {
            console.log(err);
            res.set('Access-Control-Allow-Origin', '*');
            res.status(500).json({ 'message': 'Something went wrong' });
        }
    }
});
module.exports = router;
