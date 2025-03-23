const joi = require('joi');
 
exports.taskSchema = joi.object({
    name: joi.string()
    .min(6)
    .max(60)
    .required(),

    description:joi.string()
    .min(6)
    .max(60)
    .required(),
    
})