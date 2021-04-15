import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    status: String,
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const TodoPost = mongoose.model("todoPost", todoSchema);

export default TodoPost;