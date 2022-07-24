// Require needed modules
let express = require('express')

// Initialize the app object
let app = express()

app.use('/places', require('./controllers/favorites'))

// Home page route
app.get('/', (req,res) => {
    res.send('Hello Home Page')
})

app.get('*', (req,res) => {
    res.status(404).send('<h1>404 Page</h1>')
})


// Listen for connections
app.listen(process.env.PORT, function () {
    console.log('Listening on port 4050!')
})