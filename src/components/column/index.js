import React from 'react'
import AddTask from '../addTask'
import TaskCard from '../taskCard'
import {useDispatch} from "react-redux"
import {useSelector} from "react-redux"
import {showFormAction} from "../../actions/showOptions"
import "./style.css"

const Column = ({tasks, status, moveItem}) => {

    const dispatch = useDispatch();
    const {showForm} = useSelector((state) => state.showOptions);
    const handleShowForm = () => {
      dispatch(showFormAction())
    }

    return (
        <section className="open-card task-container">
          <h4 className="container-heading">{`${status} task`}</h4>
          {
            tasks.map((task, idx) => {
              return <TaskCard key={task._id} index={idx} task={task} status={status} moveItem={moveItem}/>
            })
          }
         { status === "open" ?
         (
          <>
            <button className="add-task" onClick={handleShowForm}>+</button>
            <AddTask showForm={showForm}/>
         </>
         ) :
         null
         }
        </section>
    ) 
}

export default Column
