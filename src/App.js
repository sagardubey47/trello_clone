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
        console.log(dragIndex, hoverIndex);
        const item = items[dragIndex];
         console.log(item)
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
                console.log(items);
                 return (
                         <DropWrapper key={s.status} onDrop={onDrop} status={s.status}>
                             <Column
                                key={s.status}
                                status={s.status}
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

// import React, { useState } from "react";
// import Item from "../components/Item";
// import DropWrapper from "../components/DropWrapper";
// import Col from "../components/Col";
// import { data, statuses } from "../data";

// const Homepage = () => {
//     const [items, setItems] = useState(data);


//     return (
//         <div className={"row"}>
//             {statuses.map(s => {
//                 return (
//                     <div key={status} className={"col-wrapper"}>
//                         <h2 className={"col-header"}>{s.status.toUpperCase()}</h2>
//                         <DropWrapper onDrop={onDrop} status={s.status}>
//                             <Col>
//                                 {items
//                                     .filter(i => i.status === s.status)
//                                     .map((i, idx) => <Item key={i.id} item={i} index={idx} moveItem={moveItem} status={s} />)
//                                 }
//                             </Col>
//                         </DropWrapper>
//                     </div>
//                 );
//             })}
//         </div>
//     );
// };

// export default Homepage;
