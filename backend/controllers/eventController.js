const router = require('express').Router();
const eventModel = require('../models/event/eventModel');


router.get('/', eventModel.getAllEvents);

router.get('/:id', eventModel.getOneEvent)

router.post('/', eventModel.createEvent);

router.patch('/:id', eventModel.updateEvent)
router.put('/:id', eventModel.updateEvent)

router.delete('/:id', eventModel.deleteEvent);




module.exports = router;