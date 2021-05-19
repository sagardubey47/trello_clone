import React,{useEffect} from "react"
import {useDispatch} from "react-redux"
import {getTasks} from "./actions/index"
import {useSelector} from "react-redux"

function App() {

  const dispatch = useDispatch();
 

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch])

  const tasks = useSelector((state) => state.tasks);

   
  console.log(tasks);
 
  return (
    <div className="app"> 
      
     {
       tasks.map((task) => {
         return <li key={task._id}> {task.title}</li>
       })
     }
         
      
      
    </div>
  );
}

export default App;
