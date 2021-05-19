
// eslint-disable-next-line import/no-anonymous-default-export
import {FETCH_ALL, CREATE, UPDATE, DELETE} from "../constants/actionTypes";


// eslint-disable-next-line import/no-anonymous-default-export
export default (tasks = [], action) => {

   switch(action.type) {
       case CREATE:
           return [...tasks, action.payload];

       case FETCH_ALL:
           return action.payload; 

       case UPDATE:   
            return tasks.map((task) => task._id === action.payload._id ? action.payload : task )
       
       case DELETE:
             return tasks.filter((task) => task._id !== action.payload);     
       default:
           return tasks;
   }
}