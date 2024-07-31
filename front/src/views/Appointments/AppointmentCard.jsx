import React, { useEffect, useState } from "react";
import Style from "./AppointmentCard.module.css"
import { putAppointment } from "../../services/appointmentService";

const AppointmentCard = ({
    key,
    id,
    date,
    time,
    status,
    user,
    onDelete
})=>{
    
    date = new Date(date);
    const formatDate = `${date.getDate()}/${date.getMonth()+1 }/${date.getFullYear()}`
    const [renderKey, setRenderKey] = useState(0);

    function deleting(id){
        putAppointment(id);
        alert('turno cancelado')
        setRenderKey(prevKey => prevKey + 1);
    }

    useEffect(() => {
        console.log("estoy en useEfect")
      }, []);
    
    const handleDelete = (id) => {
        if (status != 'cancelled'){
            deleting(id);
            onDelete();
        }
    }

    return (
        <>
            <td className={Style.column} key={renderKey}>{id}</td>
            <td className={Style.column}>{formatDate}</td>
            <td className={Style.column}>{time}hs</td>
            <td className={Style.column}>{status}</td>
            <td className={Style.column}>{user.id}</td>
            <td className={Style.column}>
                <button className={Style.navlink} disabled={status === 'cancelled'} onClick={() => handleDelete(id)} >Eliminar</button>
            </td>
        </>
    )
}
export default AppointmentCard