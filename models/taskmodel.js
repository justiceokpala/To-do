const { number } = require('joi');
const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    id: {
       type: Number,
    },
    name: {
        type: String,
        required: [true,"Name is required"],
        lowerCase: true,     
    },
    description :{
        type: String,
        required: [true,"Description must be provided"],   
    },
    
},{
    timestamps: true,
});

module.exports = mongoose.model("Task", taskSchema);