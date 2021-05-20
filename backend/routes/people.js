const express = require('express');
const router = express.Router();
const {createPeople , getPeople , updatePeople , deletePeople} = require("../controllers/peopleController")

router.post('/people',createPeople)

router.get('/people',getPeople)

router.put('/people/:user_id',updatePeople)

router.delete('/remove/:user_id',deletePeople)



module.exports =router;