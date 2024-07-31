import { Request, Response } from "express";
import { User } from "../entities/User";
import { createUserService, getUserByIdService, getUsersService } from "../services/userService";
import IUserDto from "../interfaces/IUserDto";
import ICredentialDto from "../interfaces/ICredentialDto";
import { validateCredential } from "../services/credentialService";
import { findUserByCredById } from "../services/userService";


export const getAllUser = async (req:Request, res:Response):Promise<void> => {
    try {
        const users: User[] = await getUsersService();
        res
        .status(200)
        .json(users);
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
}

export const getUserById = async (req:Request, res:Response):Promise<void> => {
    try {
        const id = req.params;
        const user: User|null = await getUserByIdService(Number(id));
        res
        .status(200)
        .json(user);
    } catch (error) {
        if (error  instanceof Error){
            res
            .status(404)
            .json({
                message: 'Error al obtener usuario',
                error: error.message
            });
        }
    }
}

export const register = async (req:Request, res:Response):Promise<void>=>{
    try {
        const {username, password, name, email, birthdate, nDni} = req.body;
        const userPartial:IUserDto = {name, email, birthdate, nDni};
        const credentialPartial:ICredentialDto = {username, password};
        const newUser:User|null = await createUserService(userPartial, credentialPartial);
        
        res
        .status(201)
        .json(newUser);
    } catch (error) {
        if (error  instanceof Error){
            res
            .status(400)
            .json({
                message: 'Error al resgistrar',
                error: error.message
            });
        }
    }
}

export const login = async (req:Request, res:Response):Promise<void>=>{
    const {username, password} = req.body
    try {
        const credential = await validateCredential({username, password})
        const user = (await findUserByCredById(credential.id));
        console.log('login me devuelve: '+ user)
        res.status(200).json({login: true, user: user})
    } catch (error:any) {
        res
        .status(400)
        .json({
            message: 'Error al ingresar',
            error: error.message
        });
    }
}