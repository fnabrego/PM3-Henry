import axios from "axios";

const appointmentsURL ='http://localhost:3000/appointments';
const appointmentsService = axios.create({baseURL: appointmentsURL});


export const getAppointments = async () => {
    try{
        const response = await appointmentsService.get();
        console.log(response.data);
        return response.data;
    }catch(error){
        throw new Error('Error fetching users: '+ error.message);
    }
};
export const getAppointment = async (appId) => {
    try {
        const response = await appointmentsService.get(`/${appId}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching user: '+ error.message);
    }
};
export const postAppointment = async (data) => {
    try {
        const response = await appointmentsService.post('/schedule', data);
        return response.data;
    } catch (error) {
        throw new Error('Error created appointment: '+ error.message);
    }
};
export const putAppointment = async (appid) => {
    try {
        const response = await appointmentsService.put(`/cancel/${appid}`);
        return response.data;
    } catch (error) {
        throw new Error('Error delete appointment: '+ error.message);
    }
};