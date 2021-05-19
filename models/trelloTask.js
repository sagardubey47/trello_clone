import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
    title: String,
    description: String,
    creator: String,
    status: {
        type: String,
        default: "open"
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    members: {
        type: Array,
        default: []
    }
});

const TaskModel = mongoose.model("taskModel", taskSchema);

export default TaskModel; 