const express = require('express');
const arrayController = require('../Controller/arrayController')
const router = express.Router();

router.post('/createtask', arrayController.createTask);
router.get('/gettasks', arrayController.getTasks);
router.get('/singletask',arrayController.getTask);
router.patch('/updatetask',arrayController.updateTask);
router.patch('/statusUpdate',arrayController.completedTask);

module.exports = router;