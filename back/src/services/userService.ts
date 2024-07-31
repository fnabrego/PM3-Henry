import {  UserGet } from "../config/data-source";
import { Credential } from "../entities/Credential";
import { User } from "../entities/User";
import ICredentialDto from "../interfaces/ICredentialDto";
import IUserDto from "../interfaces/IUserDto";

import { createCredential } from "./credentialService";

type UserPartial = Partial<User>;
type CredentialPartial = Partial<Credential>;

export const getUsersService = async ():Promise<User[]> => {
  try {
      const users: User[] = await UserGet.find({relations:['appointments']});
      console.log('Usuarios encontrados:', users);
      return users;
  } catch (error) {
      alert('Error de búsqueda')
      throw new Error('Error de búsqueda');
  }
}

export const getUserByIdService = async (id:number):Promise<User|null> => {
  try {
      const existingUser:User |null = await UserGet.findOneBy({id});
      console.log('Usuario encontrado:', existingUser);
      return existingUser;
  } catch (error) {
      alert('Usuario no encontrado')
      throw new Error('Usuario no encontrado');
  }
};

export const createUserService = async (userDto:UserPartial, credentialDto:CredentialPartial):Promise<User|null>=>{
  try {
      const newUser:User = await UserGet.create(userDto);
      const credentialId:Credential = await createCredential(credentialDto);
      newUser.credentialIs = credentialId;
      const creating:User = await UserGet.create(newUser);
      const results = await UserGet.save(creating);
      console.log('Usuario creado');
      return results;
  } catch (error) {
      alert('Error de creación')
      throw new Error('Error de creación');
  }
}

export const deleteUserService = async (id:number):Promise<void> => {
  try {
      const existingUser:User|null = await UserGet.findOneBy({id});
      console.log('Usuario encontrado:', existingUser);
      if (existingUser) await UserGet.delete(existingUser);
      console.log('Usuario eliminado:', existingUser);
  } catch (error) {
      alert('Usuario no encontrado')
      throw new Error('Usuario no encontrado');
  }
};
export const findUserByCredById = async (credentialId:number):Promise<User> =>{
  try {
    const foundUser = await UserGet
    .createQueryBuilder('user')
    .leftJoinAndSelect('user.appointments', 'appointments')
    .where('user.credentialIs = :credentialId', { credentialId })
    .getOne();
      /* const foundUser = await UserGet.findOneBy({credentialIs: {id:credentialId}}); */
      if(!foundUser) throw new Error('que pasoo');
      console.log(foundUser);
      return foundUser;
  } catch (error) {
      alert('Usuario no encontrado');
      throw new Error('Usuario no encontrado');
  }
}