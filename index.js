// Require needed modules
let express = require('express')
const dotenv = require('dotenv')
dotenv.config({ path:'./.env'})

// Initialize the app object
const app = express()
app.use('/favorites', require('./controller/favorites'))


// Home page route
app.get('/', (req,res) => {
    res.send('Hello Home Page')
})

app.get('*', (req,res) => {
    res.status(404).send('<h1>404 Page</h1>')
})


// Listen for connections
app.listen(process.env.PORT, function () {
    console.log('Listening on port ' + process.env.PORT)
})