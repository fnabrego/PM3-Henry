import { AppDataSource } from "../config/data-source";
import { User } from "../entities/User";

export const UserRepository = AppDataSource.getRepository(User).extend({
    async findById(id:number){
        const user = this.findBy({id})
        return user
    }
    
    // funciones que sean de tarea simple...
})