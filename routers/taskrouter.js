const express = require('express');
const taskController = require('../Controller/taskController')
const router = express.Router();

router.post('/create-task', taskController.createTask);
router.get('/alltasks', taskController.getTasks);
router.get('/singletask', taskController.getTask);


router.patch('/update-task',taskController.updateTask);
router.delete('/delete-task',taskController.deleteTask);

module.exports = router;