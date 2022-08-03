const router = require('express').Router()
const { route } = require('express/lib/application')
const db = require('../model')



// GET is used to retrieve the wishlist data
router.get('/user-favorites/name/:name', async (req, res) => {
    try {
        f = await db.UserFavorites.findOne({name: req.params.name}).then()
        console.log('test')
        console.log(f)
        res.set('Access-Control-Allow-Origin', '*')
        res.send(f)
    } catch (err) {
        if (`{:name}` === undefined ) {
            console.log('Name does not exist')
        } else {
            console.log(err)
            res.set('Access-Control-Allow-Origin', '*')
            res.status(500).json({ 'message': ''})
        }
    }
})


// POST is used to create a new entity
// This creates a new wishlist
router.post('/user-favorites/name/:name', async (req, res) => {
    try {
        db.UserFavorites.create({name: req.params.name, favorites: []}).then()
        res.set('Access-Control-Allow-Origin', '*')
        res.send()
    } catch (err) {
        console.log(err)
        res.set('Access-Control-Allow-Origin', '*')
        res.status(500).json({ 'message': 'Something went wrong'}) 
    }
})


// PUT method is used to update an existing wishlist
router.put('/user-favorites/name/:name', async (req, res) => {
    try {
        db.UserFavorites.findOneAndUpdate({name: req.params.name}, {favorites: req.body}).then()
        res.set('Access-Control-Allow-Origin', '*')
        res.send()
    } catch (err) {
        if (`{:name}` === undefined ) {
            console.log('Name does not exist')
            res.set('Access-Control-Allow-Origin', '*')
            res.status(500).json({ 'message': 'Name does not exist'})
        } else {
            console.log(err)
            res.set('Access-Control-Allow-Origin', '*')
            res.status(500).json({ 'message': 'Something went wrong'})
        }
    }
})


//  DELETE method to delete a wishlist item
router.delete('/user-favorites/name/:name', (req,res) => {
    try {
        db.UserFavorites.findOneAndDelete({name: req.params.name}).then()
        res.set('Access-Control-Allow-Origin', '*')
        res.send()
    } catch (err) {
        if (`{:name}` === undefined ) {
            console.log('Name does not exist')
            res.set('Access-Control-Allow-Origin', '*')
            res.status(500).json({ 'message': 'Name does not exist'})
        } else {
            console.log(err)
            res.set('Access-Control-Allow-Origin', '*')
            res.status(500).json({ 'message': 'Something went wrong'})
        }
    }
})

module.exports = router