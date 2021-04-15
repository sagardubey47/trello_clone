import express from "express"; 
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv"

import postRoutes from "../routes/posts.js";

const app = express();
dotenv.config();

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());
app.use("/posts", postRoutes);

app.get("/", (req, res) => {
   res.send("hello to TODO APP");
})

//const CONNECTION_URL = "mongodb+srv://admin-sagar:test123@cluster0.ncszs.mongodb.net/TODOMG1?retryWrites=true&w=majority";
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