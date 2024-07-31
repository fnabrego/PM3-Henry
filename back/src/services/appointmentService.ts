import { Appointment } from "../entities/Appointment";
import { AppointmentGet } from "../config/data-source";
import { User } from "../entities/User";
import { FindRelationsNotFoundError } from "typeorm";

type AppointmePartial = Partial<Appointment>;
type UserPartial = Partial<User>;

export const allAppointments = async (id:number):Promise<Appointment[]|null> =>{
    try {
        const appointments = await AppointmentGet.find({relations:["user"]});
        /* const filteredAppointments = appointments.filter(appointment => appointment.user.id === 1); */
        console.log('Turnos encontrados' + appointments)
        return appointments;
    } catch (error) {
        alert('Turnos no encontrados')
        throw Error('Turnos no encontrados');
    }
}
export const appointmentsById = async (id:number):Promise<Appointment|null> =>{
    try {
        const appointment = await AppointmentGet.findOneBy({id});
        console.log('Turno encontrado')
        return appointment;
    } catch (error) {
        alert('Turno no encontrado')
        throw Error('id no encontrada');
    }
}

export const createAppointment = async (dataPartial:AppointmePartial):Promise<Appointment|null> =>{
    try {
        dataPartial.status = 'active';
        const creating = AppointmentGet.create(dataPartial);
        await AppointmentGet.save(creating);
        console.log(creating);
        console.log('Turno Asignado');
        return creating;
    } catch (error) {
        console.log('Turno no asignado');
        throw Error('Turno no asignado');
    }
}

export const cancelAppointment = async (id:number):Promise<void> =>{
    try {
        const appointmentSelect = await AppointmentGet.findOneBy({id});
        if (appointmentSelect) {
            appointmentSelect.status = "cancelled";
            /* appointmentSelect.user = null;  */
            await AppointmentGet.save(appointmentSelect);
            console.log(`Turno ${id} cancelado`)
        }
        // if (appointmentSelect !== null) {
        
        // await AppointmentGet.update({id}, {status:'calcelled', user: {id: 0}})
        // console.log(`Turno ${id} cancelado`)
        // }
    } catch (error) {
        console.log('Turno no encontrado');
        throw Error('Turno no encontrado'); 
    }
}