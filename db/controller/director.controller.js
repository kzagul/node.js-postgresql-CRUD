const db = require('../DBconnection')

//APIs
class DirectorController {
    //API GET all directors
    async getDirectors(req, res, next ) {
        try {
            let sql = `Select * from director`
            let result = await db.query(sql)
            // res.send(result)
            res.json(result.rows)
        }
        catch (error){
            console.error(error)
            next(error)
        }
    }
    //API GET director by id
    async getDirectorById(req, res, next){
        try{
            const id = req.params.id
            let sql = `SELECT * FROM director WHERE id = $1`
            let result = await db.query(sql, [id])
            res.json(result.rows)
        }
        catch (error){
            console.error(error)
            next(error)
        }
    }

    //Проверить
    //API POST new director
    async postDirector(req, res, next){
        try{
            const {fullName, phoneNumber} = req.body
            const result = await db.query(`INSERT INTO director (fullName, phoneNumber) values($1, $2) RETURNING *`, [fullName, phoneNumber])
            res.json(result.rows[0])
        }
        catch (error){
            console.error(error)
            next(error)
        }
    }

     //Проверить
    //API PUT director
    async putDirector(req, res, next){
        try{
            const {fullName, phoneNumber} = req.body
            const id = req.params.id
            const result = await db.query(`UPDATE locate SET fullName = $1, phoneNumber = $2 WHERE id = $4 RETURNING *`, [fullName, phoneNumber, id])
            res.json(result.rows)
        }
        catch (error){
            console.error(error)
            next(error)
        }
    }

     //Проверить
    //API DELETE director
    async deleteDirector(req, res, next){
        try{
            let sql = `DELETE FROM director WHERE id = $1`
            let id = req.params.id
            const result = await db.query(sql, [id])
            res.json(result.rows)
        }
        catch (error){
            console.error(error)
            next(error)
        }
    }
}

module.exports = new DirectorController()