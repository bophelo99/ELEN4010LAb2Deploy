const path = require('path') // used later in the exercise
const express = require('express')
const app = express()

const mainRouter = express.Router()

 mainRouter.get('/', function (req, res) {
 res.send('Hello World')
 })

 mainRouter.get('/about', function (req, res) {
 res.sendFile(path.join(__dirname, 'views', 'about.html'))
 })

 app.use(mainRouter)

 const port = process.env.PORT || 3000
app.listen(port)
console.log('Express server running on port', port)
