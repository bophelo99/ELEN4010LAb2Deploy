const path = require('path')
const mainRouter = require('./mainRoutes')
const mainRouter = express.Router()
mainRouter.get('/', function (req, res) {
res.send('Hello World')
})
mainRouter.get('/about', function (req, res) {
res.sendFile(path.join(__dirname, 'views', 'about.html'))
})
module.exports = mainRouter