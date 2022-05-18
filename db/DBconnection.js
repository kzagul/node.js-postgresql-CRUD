const {Pool} = require('pg')

require('dotenv').config()
// const isProduction = process.env.NODE_ENV === "production";

// const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;

// const pool = new Pool({
//     connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
//     ssl: {
//         rejectUnauthorized: false,
//     },
// });


const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
})

module.exports = {
    async query(text, params){
        const start = Date.now()
        const result = await pool.query(text, params)
        const duration = Date.now() - start
        console.log('executed query', {text, duration, rows: result.rowCount})
        return result
    },
    pool
}
// module.exports = pool;