import React,{ useRef,useState } from 'react'
import {useDispatch} from "react-redux"
import moment from "moment"
import {deleteTask} from "../../actions/task"
import "./style.css"
import { useDrag, useDrop } from "react-dnd";
import {ITEM_TYPE} from "../../constants/actionTypes"; 

const TaskCard = ({task, moveItem, index, icon}) => {

    const [showModal, setShowModal] = useState(false);

    // data
     const dispatch = useDispatch();
     const title = task.title ? task.title : "no title";
     const description = task.description ? task.description : "no description";
     const taskStatus = task.status ? task.status : "open";
     const createdAt = task?.createdAt;
     const members = task?.members;

    // dnd logic
    const ref = useRef(null);

     const [, drop] = useDrop({
        accept: ITEM_TYPE,
        hover(item, monitor) {
            if (!ref.current) {
                return
            }
            const dragIndex = item.index;
            const hoverIndex = index;

            if (dragIndex === hoverIndex) {
                return
            }

            const hoveredRect = ref.current.getBoundingClientRect();
            const hoverMiddleY = (hoveredRect.bottom - hoveredRect.top) / 2;
            const mousePosition = monitor.getClientOffset();
            const hoverClientY = mousePosition.y - hoveredRect.top;

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }

            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }
            moveItem(dragIndex, hoverIndex);
            item.index = hoverIndex;
        },
    });

    const [{ isDragging }, drag] = useDrag({
        type: ITEM_TYPE,

        item: { 
            type: ITEM_TYPE, 
            ...task, 
            index 
        },
        collect: monitor => ({
            isDragging: !!monitor.isDragging()
        })
    });

    drag(drop(ref));
     
    // helpher
     const handleClick = () => {
        setShowModal((prev) =>  !prev)
     }

     const handleDeleteTask = () => {
         dispatch(deleteTask(task._id))
     }

    return (
             <>
             <div 
                className="tasks" 
                onClick={handleClick} 
                ref={ref} 
                style={{ opacity: isDragging ? 0 : 1 }}
             >
                <p className="title">{title}</p>
                <p>{description}</p>
                <p>status: {taskStatus}</p> 
                <p>{moment(createdAt).fromNow()}</p>
                <p className="icon">{icon}</p>
             </div>
             {
                 showModal? (
                    <div className="modal" >
                        <p className="title">Title: {title}</p>
                        <p>Description: {description}</p>
                        <p>Status: {taskStatus}</p> 
                        <p>CreatedAt: {moment(createdAt).fromNow()}</p>
                        <p> Members:
                            {
                                members.map((member, index) => {
                                    return <span key={index}>{`${member} `}</span>
                                })
                            }
                        </p>
                        <button onClick={handleDeleteTask}>Delete</button>
                        <button>Edit</button>
                        <button onClick={handleClick}>Back</button>
                    </div>
                 ): (null)
             }
             </>
    )
}

export default TaskCard
