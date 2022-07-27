const router = require('express').Router()

router.get('/save', (req,res) => {
    res.send('GET /favorites')
})

// post localhost:3000/favorites
router.post('/', (req, res) => {
    db.Place.create(req.body)
    .then(() => {
        res.redirect('/favorites')
    })
    .catch(err => {
        if (err && err.name == 'ValidationError') {
            let message = 'Validation Error: '
  
            for (var field in err.errors) {
              message += `${field} was ${err.errors[field].value}. `
              message += `${err.errors[field].message}`
            }
            console.log('Validation error message', message)
            res.render('favorites/new', { message })
        }
        else {
            res.render('error404/error404')
        }
    })
  })

module.exports = router