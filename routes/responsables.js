const express = require('express');
const router = express.Router();
const pool = require('../helpers/database');
const bcrypt = require('bcrypt');


router.get('/', async function(req,res){
    try {
        const sqlQuery = 'SELECT * FROM responsables';
        const rows = await pool.query(sqlQuery, req.params.id);
        res.status(200).json(rows);
        console.log("Solicitada info de responsables de " + req.params.id)
    } catch (error) {
        res.status(400).send(error.message)
    }


    //res.status(200).json({id:req.params.id})
});

router.get('/:responsable', async function(req,res){
    try {
        const sqlQuery = "select contacto from vuls.responsables where responsable = '" + req.params.responsable + "'";
        const rows = await pool.query(sqlQuery, req.params.id);
        res.status(200).json(rows);
        console.log("Solicitada info de responsable de " + req.params.id)
    } catch (error) {
        res.status(400).send(error.message)
    }


    //res.status(200).json({id:req.params.id})
});

module.exports = router;