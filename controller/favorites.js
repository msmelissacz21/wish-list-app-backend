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
router.post('/save', (req, res) => {
    db.Favorites.create(req.body).then(
        console.log('saved')
    )

    res.send('Favorite saved to wishlist database')
})

// PUT method is used to update an existing entity
router.put('/update', (req,res) => {

})

//  DELETE method 
router.delete('/', (req,res) => {

})

module.exports = router