import React,{useState} from 'react'
import "./style.css"
import {useDispatch} from "react-redux"
import { createTask } from '../../actions/task';

const AddTask = ({showForm, setShowForm}) => {

    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [memberRaw, setMember] = useState([]);
    const [status, setStatus] = useState("open");

    const handleSubmit = (e) => {

       e.preventDefault();
       console.log("submitted")
       const  member = memberRaw.split(" ");
       dispatch(createTask({
           title,
           description,
           member,
           status,
       }));
       setShowForm(false);
    }

    return (
        showForm ? 
       ( <form className="task-form" onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="title" 
                value={title} 
                placeholder="title" 
                onChange={(e) => {setTitle(e.target.value)}} 
            />
            <input 
                type="text" 
                name="description" 
                placeholder="description"
                value={description}
                required
                onChange={(e) => {setDescription(e.target.value)}}
             />
            <input 
                type="text" 
                name="member" 
                placeholder="add member" 
                value={memberRaw}    
                onChange={(e) => {setMember(e.target.value)}}
            />
            <input 
                type="text" 
                name="status" 
                placeholder="status eg: open, inprogress, completed"
                value={status}    
                onChange={(e) => {setStatus(e.target.value)}}
            />
            <button type="submit"> add </button>
            <button type="submit" onClick={() => {setShowForm(false)}}> cancel </button>
        </form>) :
        (null)
    )
}

export default AddTask
