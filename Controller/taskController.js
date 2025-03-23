const {taskSchema} = require ("../middlewares/validator")
const Task = require ("../models/taskmodel")


exports.createTask = async (req, res) =>{
    const {name,description} = req.body;
try {
    const {error, value} = taskSchema.validate({name,description})
    if(error){
        return res
        .status(400)
        .json({success:false, message: error.details[0].message});
       }
       const task = new Task({ name, description });
       task.save(); 
       res.status(200)
      .json({success:true, message:'Task created successfuly!'})    
    }   
 catch (error) {
    console.log(error)
}
}


exports.getTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const task = await Task.findOne(taskId);
    if (!task) {
      res.status(404).json({ message: 'Task not found' });
    } else {
      res.json(task);
    }
  } catch (err) {
    res.status(500).json({ message: 'Error fetching task' });
  }
};



exports.getTasks = async (req, res) => {
    try {
      const tasks = await Task.find().exec();
      res.json(tasks);
    } catch (err) {
      res.status(500).json({ message: 'Error fetching tasks' });
    }
};


exports.updateTask = async (req, res) => {
    const {name,description} = req.body;
    try {
        const {error, value} = taskSchema.validate({name,description})
        if(error){
            return res
            .status(400)
            .json({success:false, message: error.details[0].message});
        }
      const taskId =  req.params.id;
      const task = await Task.findOne(taskId);
      if (!task) {
        res.status(404).json({ message: 'Task not found' });
      }
    task.name = name;
    task.description = description;
      await task.save();
      res.json(task);
    } catch (err) {
      res.status(500).json({ message: 'Error updating task' });
    }
  };

  exports.deleteTask = async (req, res) => {
    try {
    const taskId =  req.params.id;;
    const task = await Task.findOneAndDelete(taskId);
    if (!task) {
    return res.status(404).json({ message: 'Task not found' });
    }
    res.json({ message: 'Task deleted successfully' });
    } catch (err) {
    res.status(500).json({ message: 'Error deleting task' });
    }
    };
    




  

  
  
      



