const express = require('express');
const router = express.Router();
const pool = require('../helpers/database');
const bcrypt = require('bcrypt');


router.get('/', async function(req,res){
    try {
        const sqlQuery = 'SELECT * FROM cve';
        const rows = await pool.query(sqlQuery, req.params.id);
        res.status(200).json(rows);
        console.log("Solicitada info de " + req.params.id)
    } catch (error) {
        res.status(400).send(error.message)
    }


    //res.status(200).json({id:req.params.id})
});

router.put('/:cve', async function(req,res){
    try {
        const sqlQuery = "UPDATE cve SET notificacion = 'SI' WHERE cve = '" + req.params.cve + "'";
        const rows = await pool.query(sqlQuery, req.params.id);
        console.log("Se ha cambiado el estado de el campo notificacion del cve: " + req.params.cve)
        res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message)
    }


    //res.status(200).json({id:req.params.id})
});

module.exports = router;