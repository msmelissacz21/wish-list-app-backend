// Require needed modules
let express = require('express')
const dotenv = require('dotenv')
dotenv.config({ path:'./.env'})
const mongoose = require('mongoose')

// Initialize the app object
const app = express()
app.use('/favorites', require('./controller/favorites'))



// LISTEN
// app.listen(PORT, () => {
//   console.log('listening at port', PORT);
// })


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


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('DB connected'))
.catch(err => console.error(err));


//step for connecting went over 7/26/22 class
// const url = `${process.env.BACKEND_URL}/users`

// fetch(url, {
//     method: 'POST'
// })