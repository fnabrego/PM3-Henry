import { useEffect, useState } from "react";
import { getUser, getUsers, postUserL, postUserR } from "../services/userService";
import { getAppointment, getAppointments, postAppointment, putAppointment } from "../services/appointmentService";

export default function useFetch({endpoint = '', id=null, data=null}) {
    const [responseData, setResponseData] = useState(null);
    const [error, setError] = useState(null);
    useEffect(()=>{
        const fetchData = async()=>{
            try {
                switch(endpoint) {
                    case 'users':
                        const users = await getUsers();
                        setResponseData(users);
                        break;
                    case 'userID':
                        const user = await getUser(id);
                        setResponseData(user);
                        break;
                    case 'register':
                        const register = await postUserR(data);
                        setResponseData(register);
                        break;
                    case 'login':
                        const logger = await postUserL(data);
                        setResponseData(logger);
                        break;
                    case 'appointments':
                        const appointments = await getAppointments();
                        setResponseData(appointments);
                        break;
                    case 'appointmentId':
                        const appointment = await getAppointment(id);
                        setResponseData(appointment);
                        break;
                    case 'schedule':
                        const schedule = await postAppointment(data);
                        setResponseData(schedule);
                        break;
                    case 'delete':
                        const deleted = await putAppointment(id);
                        setResponseData(deleted);
                        break;
                    default:
                      console.log('error en switch');
                      break;
                  }
            } catch (error) {
                setError(error);
            }
        }
        fetchData();
    },[endpoint, id, data]);
    return {responseData, error};
}