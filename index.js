// Require needed modules
let express = require('express')

// Initialize the app object
let app = express()

// Home page route
app.get('/', (req,res) => {
    res.send('Hello Home Page')
})


// Listen for connections
app.listen(4050, function () {
    console.log('Listening on port 4050!')
})