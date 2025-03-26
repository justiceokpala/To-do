const express = require('express');
const mongoose = require('mongoose');
//const taskRouter = require('./routers/taskrouter');
const arraytaskRouter = require('./routers/arraytaskrouter');



const app = express();
app.use(express.json()); 


mongoose
    .connect(process.env.MONGODB_URI)
    .then(()=>{
        console.log("Database Connected");
    })
    .catch(err => {
        console.log(err)
    })



app.use('/api/task',arraytaskRouter);
app.get('/' , (req, res) =>{
    res.json({message: "hello from the server"})
})

app.listen(process.env.PORT, () => {
console.log("listening...")
})