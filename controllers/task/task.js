import TaskModel from "../../models/trelloTask.js";
import mongoose from "mongoose";

export const getTasks = async (req, res) => {
    
    try{
          const tasks = await TaskModel.find();
          res.status(200).json(tasks);

    } catch(error) {

        console.log(error);
        res.status(404).json({message: error.message});

    }
} 

export const createTask = async (req, res) => {
    const task = req.body;
    const newTask = new TaskModel(task);
    
    try {

        await newTask.save();
        res.status(201).json(newTask);

    } catch (error) {

        console.log(error);
        res.status(409).json({message: error.message});

    }
}

export const updateTask = async (req, res) => {
    
    const {id: _id} = req.params;
    const task = req.body;
    
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No Post available");

    const updatedTask = await TaskModel.findByIdAndUpdate(_id, {...task, _id}, {new: true});
    res.json(updatedTask);

}

export const deleteTask = async (req,res) => {

    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No post with that id");

    await TaskModel.findByIdAndRemove(id);
    res.json({message: "post deleted succesfully"});

}

