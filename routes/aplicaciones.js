const express = require('express');
const router = express.Router();
const pool = require('../helpers/database');
const bcrypt = require('bcrypt');


router.get('/', async function(req,res){
    try {
        const sqlQuery = 'SELECT * FROM aplicaciones';
        const rows = await pool.query(sqlQuery, req.params.id);
        res.status(200).json(rows);
        console.log("Solicitada info de aplicaciones de " + req.params.id)
    } catch (error) {
        res.status(400).send(error.message)
    }


    //res.status(200).json({id:req.params.id})
});

router.get('/:host', async function(req,res){
    try {
        const sqlQuery = "SELECT responsable FROM vuls.aplicaciones WHERE host = '" + req.params.host + "'";
        const rows = await pool.query(sqlQuery, req.params.id);
        res.status(200).json(rows);
        console.log("Solicitada info de aplicaciones de " + req.params.id)
    } catch (error) {
        res.status(400).send(error.message)
    }


    //res.status(200).json({id:req.params.id})
});

module.exports = router;