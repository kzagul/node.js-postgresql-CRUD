//sportinstitution
const db = require('../DBconnection')

class SportInstitutionController {
    //API get sport institutions
    async getSportInstitutions(req, res, next,) {
        try {
            let sql = `Select * from sportinstitution`
            let result = await db.query(sql)
            res.json(result.rows)
        }
        catch (error){
            console.error(error)
            next(error)
        }
    }


    async getAllFull(req, res, next) {
        try {
            let sql = `SELECT
                            sportinstitution.id,

                            contacts.website,
                            contacts.phonenumber,
                            contacts.vk,
                            contacts.inst

                            
                        FROM 
                            sportinstitution 

                        JOIN 
                            contacts 
                        ON 
                            sportinstitution.fk_contacts_id = contacts.id;`
            let result = await db.query(sql)
            res.json(result.rows)
        }
        catch (error){
            console.error(error)
            next(error)
        }
    }





    //API GET sport institution by id
    async getSportInstitutionById(req, res, next){
        try{
            const id = req.params.id
            let sql = `SELECT * FROM sportinstitution WHERE id = $1`
            let result = await db.query(sql, [id])
            res.json(result.rows)
        }
        catch (error){
            console.error(error)
            next(error)
        }
    }
    //API POST new sport institution
    async postSportInstitution(req, res, next){
        try{
            const {name, classificationnumber, fk_location_id, fk_director_id, fk_contacts_id} = req.body
            const result = await db.query(`INSERT INTO sportinstitution (name, classificationnumber, fk_location_id, fk_director_id, fk_contacts_id) values($1, $2, $3, $4, $5) RETURNING *`, [name, classificationnumber, fk_location_id, fk_director_id, fk_contacts_id])
            res.json(result.rows[0])
        }
        catch (error){
            console.error(error)
            next(error)
        }
    }
    //API PUT sport institution
    async putSportInstitution(req, res, next){
        try{
            const {name, classificationnumber, fk_location_id, fk_director_id, fk_contacts_id} = req.body
            const id = req.params.id
            const result = await db.query(`UPDATE sportinstitution SET name = $1, classificationnumber = $2, fk_location_id = $3, fk_director_id = $4, fk_contacts_id = $5 WHERE id = $6 RETURNING *`, [name, classificationnumber, fk_location_id, fk_director_id, fk_contacts_id])
            res.json(result.rows)
        }
        catch (error){
            console.error(error)
            next(error)
        }
    }
    //API DELETE sport institution
    async deleteSportInstitution(req, res, next){
        try{
            let sql = `DELETE FROM sportinstitution WHERE id = $1`
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

module.exports = new SportInstitutionController()