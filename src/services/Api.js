import axios from 'axios';

const URL='http://localhost:8000';

export const addUser=async (data)=>{
    try {
        await axios.post(`${URL}/add`,data)
    } catch (error) {
        console.log('error while calling addUser api...',error.message)
    }
}

export const getUsers=async(req,res)=>{
    try {
        let result=await axios.get(`${URL}/users`)
        return result.data;
    } catch (error) {
        console.log('error while calling getUsers api...',error.message)
    }
}

export const setConversation=async(data)=>{
    try {
        await axios.post(`${URL}/conversation/add`,data)
    } catch (error) {
        console.log('error while calling setConversation api...',error.message)
    }
}

export const getConversation=async(req,res)=>{
    try {
        let result=await axios.post(`${URL}/conversation/get`)
        return result.data;
    } catch (error) {
        console.log('error while calling getConversation api...',error.message)
    }
}

export const newMessage=async(data)=>{
    try {
        await axios.post(`${URL}/message/add`,data)
    } catch (error) {
        console.log('error while calling newMessage api...',error.message)
    }
}

export const getMessages=async(id)=>{
    try {
        let response=await axios.get(`${URL}/message/get/${id}`)
        return response.data;
    } catch (error) {
        console.log('error while calling getMessages api...',error.message)
    }
}

export const uploadFile=async(data)=>{
    console.log(data)
    try {
        await axios.post(`${URL}/file/upload`,data)
    } catch (error) {
        console.log('error while calling uploadFile api...',error.message)
    }
}