import React,{useState} from 'react'
import AddTask from '../addTask'
import TaskCard from '../taskCard'
import "./style.css"

const Column = ({tasks, status, moveItem, icon}) => {

    const [showForm, setShowForm] = useState(false);
  
    const handleShowForm = () => {
        setShowForm((prev) => !prev)
    }

    return (
        <section className="open-card task-container">
          <h4 className="container-heading">{`${status} task`}</h4>
          {
            tasks.map((task, idx) => {
              return <TaskCard 
                         key={task._id} 
                         index={idx} 
                         task={task} 
                         status={status} 
                         icon={icon} 
                         moveItem={moveItem}
                         />
            })
          }
         { status === "open" ?
         (
          <>
            <button className="add-task" onClick={handleShowForm}>+</button>
            <AddTask showForm={showForm} setShowForm={setShowForm} />
         </>
         ) :
         null
         }
        </section>
    ) 
}

export default Column
