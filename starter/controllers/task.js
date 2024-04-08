
const taskSchema = require('../models/taskSchema')

const getAllTask = async (req, res)=>{
    const task = await taskSchema.find({})
    res.status(202).json(task)
}
const createTask = async (req, res)=>{
  try {
    const task = await taskSchema.create(req.body)
    res.status(202).json(task)
  } catch (error) {
    res.status(404).json({message: error})
  }
}
const getTask = async (req, res)=>{

  try {
    const {id: taskID} = req.params
    const task = await taskSchema.findOne({_id: taskID})
    if(!task){
      return res.status(404).json({message: `No task with id : ${taskID}`})
    }
    res.status(200).json({task})
    
  } catch (error) {
    res.status(500).json({msg: error})
    
  }
}
const updateTask = (req, res)=>{
    res.send('update item')
}
const deleteTask = (req, res)=>{
    res.send('delete item')
}

module.exports = {
    getAllTask,
    createTask,
    getTask,
    updateTask,
    deleteTask
}