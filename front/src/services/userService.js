import axios from "axios";

const usersURL ='http://localhost:3000/users';
const usersService = axios.create({baseURL: usersURL});


export const getUsers = async () => {
    try{
        const response = await usersService.get();
        return response.data;
    }catch(error){
        throw new Error('Error fetching users: '+ error.message);
    }
};
export const getUser = async (id) => {
    try {
        const response = await usersService.get('/:appid');
        return response.data;
    } catch (error) {
        throw new Error('Error fetching user: '+ error.message);
    }
};
export const postUserR = async (user) => {
    try {
        const response = await usersService.post('/register', user);
        return response.data;
    } catch (error) {
        throw new Error('Error created user: '+ error.message);
    }
};
export const postUserL = async (user) => {
    try {
        const response = await usersService.post('/login', user);
        return response.data;
    } catch (error) {
        throw new Error('Error logged user: '+ error.message);
    }
};