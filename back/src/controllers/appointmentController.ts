import { Request, Response } from "express";
import { allAppointments, appointmentsById, cancelAppointment, createAppointment } from "../services/appointmentService";

export const getAllAppointments = async (req:Request, res:Response):Promise<void>=>{
    try {
        const appointments = await allAppointments(req.body);
        res
        .status(200)
        .json(appointments);
    } catch (error) {
        if (error  instanceof Error){
            res
            .status(404)
            .json({
                message: 'Error al obtener turnos',
                error: error.message
            });
        }
    }
};

export const getAppointmentById = async (req:Request, res:Response):Promise<void>=>{
    try {
        const appointment = await appointmentsById(req.body);
        res
        .status(200)
        .json(appointment);
    } catch (error) {
        if (error  instanceof Error){
            res
            .status(404)
            .json({
                message: 'Error al obtener usuarios',
                error: error.message
            });
        }
    }
};

export const schedule = async (req:Request, res:Response):Promise<void>=>{
    try {
        const dataPartialApp = req.body;
        const statusSchedule = createAppointment(dataPartialApp);
        res
        .status(201)
        .json({message: `Turno asignado ${statusSchedule}`});
    } catch (error) {
        if (error  instanceof Error){
            res
            .status(400)
            .json({
                message: 'Error al asignar turno',
                error: error.message
            });
        }
    }
};
isNaN
export const cancel = async (req:Request, res:Response):Promise<void>=>{
    try {
        const {appId} = req.params;
        const id: number = parseInt(appId, 10);
        console.log(id)
        cancelAppointment(id);
        getAllAppointments;
        res
        .status(200)
        .json({message: `Turno cancelado ${id}`});
    } catch (error) {
        if (error  instanceof Error){
            res
            .status(404)
            .json({
                message: 'Error al cancelar turno',
                error: error.message
            });
        }
    }
/*     res.status(200).json({message:'PUT/appointments/cancel/:appid'}) */
    };