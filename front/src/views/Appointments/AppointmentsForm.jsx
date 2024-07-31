import Style from './AppointmentsForm.module.css'
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { accessStorage } from '../../helpers/storeAction';
import { postAppointment } from '../../services/appointmentService';
import { setUserAppointments } from '../../redux/userSlice';

const AppointmentsForm = ({onsubmit}) => {
    const {user, session} =  accessStorage()
    const navigate = useNavigate()
    const dispatch = useDispatch();

    useEffect(()=> {
      if(!user | !session) navigate('/')
    },[navigate,user])

    const [appointmentData, setAppointmentData] = useState({
        date: '',
        time: '09:00',
        user: user,
    });

    const handleChange = (e) => {
        setAppointmentData({ ...appointmentData, [e.target.name]: e.target.value });
    };

    function creating(appointmentData){
      dispatch(setUserAppointments(appointmentData))
      postAppointment(appointmentData)
      alert('TurnoRegistrado');
  }

    const handleSubmit = (e) => {
        e.preventDefault();
        creating(appointmentData)
        navigate('/myAppointments')
    };

    function generateTimeOptions() {
      const options = [];
      for (let hour = 9; hour <= 15; hour++) {
        for (let minute = 0; minute < 60; minute += 30) {
          const formattedHour = hour.toString().padStart(2, '0');
          const formattedMinute = minute.toString().padStart(2, '0');
          options.push(
            <option key={`${formattedHour}:${formattedMinute}`} value={`${formattedHour}:${formattedMinute}`}>
              {`${formattedHour}:${formattedMinute}`}
            </option>
          );
        }
      }
      return options;
    }

  return (
        <section className={Style.appointmentForm}>
          <div className={Style.container}>
            <form className={Style.form} onSubmit={handleSubmit}>
              <label className={Style.label} htmlFor='date'>Fecha:</label>
              <input className={Style.input}
                    required type="date" id="date" name="date"
                    onChange={handleChange}
                    value={appointmentData.date}
              />
              <label className={Style.label} htmlFor='time'>Hora:</label>
              <select className={Style.input}
                    required 
                    id='time' 
                    name="time" 
                    onChange={handleChange}
              >
                {generateTimeOptions()}
              </select>
              
                  <div className={Style.option}>
                    <input className={Style.navlink} type="submit" value="Solicitar"/>
                  </div>
              
            </form>
          </div>
        </section>
    
  );
};

export default AppointmentsForm;
{/* <label>Usuario: {user.name}</label> */}
        
        {/* <label>Status: </label>
        <input type="" name="status" onChange={handleChange} /> */}