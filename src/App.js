import React,{useEffect, useState} from "react"
import {useDispatch} from "react-redux"
import {getTasks, updateTask} from "./actions/task"
import {useSelector} from "react-redux"
import Header from "./components/header"
import "./style.css"
import { DndProvider } from "react-dnd"
import {HTML5Backend as Backend} from "react-dnd-html5-backend"
import DropWrapper from "./components/dropWrapper"
import {statuses} from "./constants/actionTypes"
import Column from "./components/column"

function App() { 

    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getTasks());
    }, [dispatch])

    const tasks = useSelector((state) => state.tasks);
    const [items, setItems] = useState(tasks);

    useEffect(() => {
      setItems(tasks);
    }, [tasks])
    
    const onDrop = (item, monitor, status) => {
            const newItem = {...item, status};
            dispatch(updateTask(item._id, newItem));
        };

    const moveItem = (dragIndex, hoverIndex) => {
       
        const item = items[dragIndex];
        setItems(prevState => {
            const newItems = prevState.filter((i, idx) => idx !== dragIndex);
            newItems.splice(hoverIndex, 0, item);
            return  [ ...newItems ];
        });
    };

 
  return (
    <div className="app"> 
        <DndProvider backend={Backend}>
            <Header />
            <main className="main-container">
              {statuses.map(s => {
               
                return (
                    <DropWrapper key={s.status} onDrop={onDrop} status={s.status}>
                        <Column
                          key={s.status}
                          status={s.status}
                          icon={s.icon}
                          moveItem={moveItem}
                          tasks={items.filter(item => item.status === s.status)}
                        />
                    </DropWrapper>
                );
             })}
            </main>
        </DndProvider> 
    </div> 
  );
}

export default App;
