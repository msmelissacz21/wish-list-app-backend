// Require needed modules
let express = require('express')
const dotenv = require('dotenv')
dotenv.config({ path:'./.env'})
const mongoose = require('mongoose')

// Initialize the app object
const app = express()

app.use(express.json())

app.use('/favorites', require('./controller/favorites'))



mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('DB connected'))
.catch(err => console.error(err));

// Listen for connections
app.listen(process.env.PORT, function () {
    console.log('Listening on port ' + process.env.PORT)
})




//step for connecting went over 7/26/22 class
// const url = `${process.env.BACKEND_URL}/users`

// fetch(url, {
//     method: 'POST'
// })