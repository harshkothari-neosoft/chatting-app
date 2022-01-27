import axios from 'axios';
import { MAIN_URL } from './Url';
import io from 'socket.io-client'
const socket = io('http://localhost:3001')

export function addPost(data){
    return axios.post(`${MAIN_URL}posts/addpost`,data)
}

export function validation(data){
    return axios.post(`${MAIN_URL}posts/validate`,data) 
}
