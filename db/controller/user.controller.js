const db = require('../DBconnection')

//API
class UserController {
    //API GET all users
    async getUsers(req, res, next ) {
        try {
            let sql = `SELECT * FROM visitor`
            let result = await db.query(sql)
            res.json(result.rows)
        }
        catch (error){
            console.error(error)
            next(error)
        }
    }
    //API GET user by id
    async getUserById(req, res, next){
        try{
            const id = req.params.id
            let sql = `SELECT * FROM visitor WHERE id = $1`
            let result = await db.query(sql, [id])
            res.json(result.rows)
        }
        catch (error){
            console.error(error)
            next(error)
        }
    }
}

module.exports = new UserController()