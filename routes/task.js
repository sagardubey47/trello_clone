import express from "express";
import { getTasks, createTask, updateTask, deleteTask} from "../controllers/task/task.js";

const router = express.Router();

router.get("/", getTasks); 
router.post("/createTask", createTask); 
router.patch("/:id", updateTask);
router.delete("/:id", deleteTask);

export default router;