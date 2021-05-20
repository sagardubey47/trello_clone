import {combineReducers} from "redux";

import tasks from "./tasks"
import showOptions from "./showOptions"

export default combineReducers({
    tasks,
    showOptions
});