// Require needed modules
let express = require('express')
const dotenv = require('dotenv')
dotenv.config({ path:'./.env'})
const mongoose = require('mongoose')
const cors = require('cors')


// Initialize the app object
const app = express()

app.use(express.json())
app.use(cors())
app.use('/favorites', require('./build/controller/favorites'))



mongoose.connect(process.env.REACT_APP_MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('DB connected'))
.catch(err => console.error(err));

// Listen for connections
app.listen(process.env.PORT, function () {
    console.log('Listening on port ' + process.env.PORT)
})
