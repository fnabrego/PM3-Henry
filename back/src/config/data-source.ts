import { DataSource } from "typeorm"
import { User } from "../entities/User"
import { Appointment } from "../entities/Appointment"
import { Credential } from "../entities/Credential"
import { DB_USER, DB_PASSWORD, DB_WORK } from "../config/envs" 

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_WORK,
    /* dropSchema: true, */
    synchronize: true,
    logging: ["error"],
    entities: [User, Appointment, Credential],
    subscribers: [],
    migrations: [],
})
export const UserGet = AppDataSource.getRepository(User)
export const AppointmentGet = AppDataSource.getRepository(Appointment)
export const CredentialGet = AppDataSource.getRepository(Credential)


