import { CredentialGet } from "../config/data-source";
import { Credential } from "../entities/Credential";
import { User } from "../entities/User";
import ICredentialDto from "../interfaces/ICredentialDto";
type UserPartial = Partial<User>;
type CredentialPartial = Partial<Credential>;
export const createCredential = async(createCredential: CredentialPartial):Promise<Credential> =>{
  try {
      const creating = CredentialGet.create(createCredential);
      const saving = await CredentialGet.save(creating);
      return saving;
  } catch (error) {
      alert('Error de datos')
      throw new Error('Faltan datos')
  }
}

export const validateCredential = async(validateCredentialDto: ICredentialDto):Promise<Credential>=>{
  try {
    const {username, password} = validateCredentialDto;
    const foundCredential:Credential|null = await CredentialGet.findOneBy({username})
    if (!foundCredential) throw new Error('Usuario no encontrado')
    if (password !== foundCredential.password) throw new Error('Contraseña incorrecta')
    return foundCredential;
  } catch (error) {
    throw new Error('error de credencial')
  } 
}
