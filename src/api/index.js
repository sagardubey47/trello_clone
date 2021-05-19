import axios from 'axios';

const URL = "https://todo-backend-wakefit.herokuapp.com/posts";

//http://localhost:5000/posts
//https://todo-backend-wakefit.herokuapp.com/posts
export const fetchPosts = () => axios.get(URL);
export const createPost = (newPost) => axios.post(`${URL}/createPost`, newPost);
export const updatePost = (id, updatedPost) => axios.patch(`${URL}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${URL}/${id}`);
