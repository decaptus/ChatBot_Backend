const express = require('express');
const router = express.Router();
const pool = require('../helpers/database');
const bcrypt = require('bcrypt');


router.get('/', async function(req,res){
    try {
        const sqlQuery = 'SELECT * FROM mitigantes';
        const rows = await pool.query(sqlQuery, req.params.id);
        res.status(200).json(rows);
        console.log("Solicitada info de mitigantes de " + req.params.id)
    } catch (error) {
        res.status(400).send(error.message)
    }


    //res.status(200).json({id:req.params.id})
});

router.get('/:cve', async function(req,res){
    try {
        const sqlQuery = "SELECT IPS, firewall FROM vuls.mitigantes WHERE cve = '" + req.params.cve + "'";
        const rows = await pool.query(sqlQuery, req.params.id);
        res.status(200).json(rows);
        console.log("Solicitada info de mitigantes de " + req.params.id)
    } catch (error) {
        res.status(400).send(error.message)
    }


    //res.status(200).json({id:req.params.id})
});

module.exports = router;