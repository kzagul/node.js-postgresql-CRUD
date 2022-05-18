//packages
const express = require('express')
const appConfig =  require('./db/AppConfig.js')

require('dotenv').config()

//cors
const cors = require('cors')

//app object
const app = express()
app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use(cors())


//routes to controllers with API
const directorRouter = require('./db/routes/director.routes')
const locateRouter = require('./db/routes/locate.routes')
const contactsRouter = require('./db/routes/contacts.routes')
const trainerRouter = require('./db/routes/trainer.routes')
const sportObjectRouter = require('./db/routes/sportobject.routes')
const sportInstitutionRouter = require('./db/routes/sportinstitution.routes')
const userRouter = require('./db/routes/user.routes')

app.use('/api', directorRouter)
app.use('/api', locateRouter)
app.use('/api', contactsRouter)
app.use('/api', trainerRouter)
app.use('/api', sportObjectRouter)
app.use('/api', sportInstitutionRouter)
app.use('/api', userRouter)



app.get('/', async (req, res) => {
    res.send("Heoo")
})

const PORT = appConfig.Port || 3004
// const PORT =  3030

//checking the server's work
app.listen(PORT, "0.0.0.0", () => {
    console.log(`listen to port ${PORT}`)
})
