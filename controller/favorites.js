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

router.post('/user-favorites/user-id/:userId', async (req, res) => {
    db.UserFavorites.create({userId: req.params.userId, favorites: []}).then()
    res.send()
})

// PUT method is used to update an existing entity
router.put('/user-favorites/user-id/:userId', async (req, res) => {
    db.UserFavorites.findOneAndUpdate({userId: req.params.userId, favorites: req.body}).then()
    res.send()
})

router.get('/user-favorites/user-id/:userId', async (req, res) => {
    f = await db.UserFavorites.find({userId: req.params.userId}).then()
    res.send(f)
})

//  DELETE method 
router.delete('/:id', (req,res) => {

})

module.exports = router