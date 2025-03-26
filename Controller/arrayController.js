const statusEnum = ['Completed', 'Inprogress', 'Pending']
const tasks = [];

exports.createTask = async (req, res) => {
  try {
    const { name, description} = req.body;
    const newTask = {
      id: tasks.length + 1,
      name,
      description,
      status: statusEnum[1]
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.getTasks = async (req, res) => {
    try {
    res.status(200).json(tasks);
    } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
    }
};


exports.getTask = async (req, res) => {
try {
const taskId = req.query.id;
const task = tasks.find((task) => task.id === parseInt(taskId));
if (!task) {
return res.status(404).json({ message: 'Task not found' });
}
res.status(200).json(task);
} catch (error) {
console.error(error);
res.status(500).json({ message: 'Internal Server Error' });
}
};

exports.updateTask = async (req,res) =>{
    try {
       
        const taskId  = req.query.id;
        console.log(taskId)
         const { name, description, status } = req.body;
        const task = tasks.find((task) => task.id === parseInt(taskId));
        console.log(task, "task");
        if (!task) {
        return res.status(404).json({ message: 'Task not found' });
        }

        const newTask = {
          name : name,
          description : description,
          status : status
        };
        tasks.push(newTask);
        res.status(201).json(newTask);
       

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

exports.completedTask =async (req, res) =>{
 const taskId = req.query.id;
 const task = tasks.find((task) => task.id === parseInt(taskId));
 if(!task){
  return res.status(404).json({message: "Task does not exist"});
 }
 task.status = statusEnum[0];

 tasks.push(task);
 if (task.status == statusEnum[0] ){
 return res.status(500).json({message: "Task has been completed sucessfully"});
 }
 return res.status(409).json({message: "Task has been completed sucessfully"});

}

