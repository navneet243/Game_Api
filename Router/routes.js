const controller = require('../Controllers/controller');
const router = require('express').Router();

// get operator list
router.get('/operator',controller.getOperator)

// get operatorGameType 
router.get('/operatorgametype',controller.getOperatorgametype)

// get operatorName based on operator and operatorGameType
router.get('/operatorname',controller.getOperatorName)

// get all players based on operator, operator game type and operator name
router.get('/players',controller.getPlayers)

// Return the highest points player.
router.get('/players/best',controller.getbestPlayer)

module.exports = router;