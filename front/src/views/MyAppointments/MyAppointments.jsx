import React, { useEffect, useState } from "react"
import Style from "./MyAppointments.module.css"
import AppointmentCard from "../Appointments/AppointmentCard";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserAppointments } from "../../redux/userSlice";
import { getAppointments } from "../../services/appointmentService";
import useToogle from "../../hooks/useToogle";
import { accessStorage } from "../../helpers/storeAction";

const MyAppointments = ()=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {user, session} =  accessStorage();
    const [refreshKey, setRefreshKey] = useToogle(false);
    const [appointmentDatas, setAppointmentsData] = useState([]);

    useEffect(() => {
        if(!user|!session) navigate('/')
      }, [navigate]);
    
    useEffect(() => {
        async function fetchData() {
            const response = await getAppointments();
            console.log(response)
            dispatch(setUserAppointments(
                response.sort((a, b) => {
                    if (a.status === 'active' && b.status === 'cancelled') {
                        return -1; 
                    } else if (a.status === 'cancelled' && b.status === 'active') {
                        return 1; 
                    } else {
                        return new Date(b.date) - new Date(a.date);
                    }
                })
            )
            )
            setAppointmentsData(response)
          }
          fetchData();
    },[refreshKey]);

    const handleDelete = () => {
        setRefreshKey();
    }
    
    const userAppointments = appointmentDatas.filter(item => item.user.id === user.id)

    return (
        <section className={Style.appointments }>
            <div className={Style.container}>
                <div className={Style.label}>
                    <h3>Mis turnos</h3>
                </div>
                <div>
                    <table>
                        <thead>
                            <tr>
                            <th className={Style.column}>ID</th>
                            <th className={Style.column}>Fecha</th>
                            <th className={Style.column}>Hora</th>
                            <th className={Style.column}>Estado</th>
                            <th className={Style.column}>User ID</th>
                            <th className={Style.column}></th> {/* Columna para acciones */}
                            </tr>
                        </thead>
                        <tbody>
                            
                            {userAppointments.map(appointment => (
                                <tr>
                                <AppointmentCard 
                                key={appointment.id}
                                id = {appointment.id}
                                date = {appointment.date}
                                time = {appointment.time}
                                status = {appointment.status}
                                user = {appointment.user}
                                onDelete={handleDelete}
                                /></tr>))}
                        </tbody>
                    </table>
                </div>
            </div>

        </section>
    )
}
export default MyAppointments