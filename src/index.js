import express from "express"; 
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv"

import taskRoutes from "../routes/task.js";

const app = express();
dotenv.config();

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());
app.use("/tasks", taskRoutes);

app.get("/", (req, res) => {
   res.send("hello to Trello_clone");
})

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => {
           app.listen(PORT, () => {
               console.log(`the app is running on port number ${PORT}`);
           })     
        })
        .catch((error) => {
           console.log(error);
        })

mongoose.set('useFindAndModify', false);        