const router = require('express').Router()
const db = require('../model')


// GET is used to retrieve data
router.get('/', async (req,res) => {
    try {
        let favorites = await db.Favorites.find()
        res.send(favorites)

    } catch (err) {
        console.log(err)
        res.status(500).json({ 'message': 'unable to retrieve favorites'})
    }
})


// POST is used to create a new entity
router.post('/save', async (req, res) => {
    try {
        await db.Favorites.create(req.body).then(
        console.log('Saved to wishlist'))
        res.send()
    } catch (err) {
        console.log(err)
        res.status(500).json({ 'message': ''})
    }
})


// GET is used to retrieve data
router.get('/user-favorites/name/:name', async (req, res) => {
    try {
        f = await db.UserFavorites.find({name: req.params.name}).then()
        res.send(f)
    } catch (err) {
        if (`{:name}` === undefined ) {
            console.log('Name does not exist')
        } else {
            console.log(err)
            res.status(500).json({ 'message': ''})
        }
    }
})


// POST is used to create a new entity
router.post('/user-favorites/name/:name', async (req, res) => {
    try {
        db.UserFavorites.create({name: req.params.name, favorites: []}).then()
        res.send()
    } catch (err) {
        console.log(err)
        res.status(500).json({ 'message': 'Something went wrong'}) 
    }
})


// PUT method is used to update an existing entity
router.put('/user-favorites/name/:name', async (req, res) => {
    try {
        db.UserFavorites.findOneAndUpdate({name: req.params.name}, {favorites: req.body}).then()
        res.send()
    } catch (err) {
        if (`{:name}` === undefined ) {
            console.log('Name does not exist')
        } else {
            console.log(err)
            res.status(500).json({ 'message': 'Something went wrong'})
        }
    }
})


//  DELETE method 
router.delete('/user-favorites/name/:name', (req,res) => {
    try {
        db.UserFavorites.findOneAndDelete( {name: req.params.name}, {fav} )
    } catch (err) {

    }
})

module.exports = router