const express = require('express');
const dotenv = require('dotenv');

dotenv.config({path: '.env-local'});

const PORT = process.env.PORT || '3001';

const app = express();


/**
 * Middleware
 */
app.use(express.json());
app.use(express.urlencoded({extended:false}));

/**
 * Routes
 */

app.get('/', (request, response) => {
    response.status(200).send("This is not why you're here. Head to /user/:id and replace :id with your user id")
})

const userCVE = require('./routes/cve');
const userRouter = require('./routes/user');
const aplicacionesRouter = require('./routes/aplicaciones');
const responsablesRouter = require('./routes/responsables');
const mitigantesRouter = require('./routes/mitigantes');


app.use('/user',userRouter);
app.use('/cve',userCVE);
app.use('/aplicaciones',aplicacionesRouter);
app.use('/responsables',responsablesRouter);
app.use('/mitigantes',mitigantesRouter);

/**Start listening */
app.listen(PORT, () => {
    console.log(`Listening for requests on port ${PORT}`)
})