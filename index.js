//packages
const express = require('express')
// const appConfig =  require('./db/AppConfig.js')

require('dotenv').config()

//cors
const cors = require('cors')

const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

//app object
const app = express()
app.use(express.urlencoded({ extended: false }))
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
    // res.send("Sport 72 server by KZagul with Node.js and Love")
    res.json({ message: "SPORT node.js application by K.Zagul" });
})

app.get('/db', async (req, res) => {
    try {
      const client = await pool.connect();
      const result = await client.query('SELECT * FROM test_table');
      const results = { 'results': (result) ? result.rows : null};
      res.render('pages/db', results );
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })


// const PORT = appConfig.Port || 3004
const port = process.env.PORT || 3004
// const PORT =  3030

//checking the server's work
app.listen(port, () => {
    console.log(`listen to port ${port}`)
})
