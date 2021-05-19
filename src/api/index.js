import axios from 'axios';

const URL = "https://trello-backend-app.herokuapp.com/tasks";

export const fetchTasks = () => axios.get(URL);
export const createTask = (newPost) => axios.post(`${URL}/createTask`, newPost);
export const updateTask = (id, updatedPost) => axios.patch(`${URL}/${id}`, updatedPost);
export const deleteTask = (id) => axios.delete(`${URL}/${id}`);
