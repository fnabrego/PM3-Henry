import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Appointment } from "./Appointment";
import { Credential } from "./Credential";

@Entity({
    name: "users"
})
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    email: string
    
    @Column()
    birthdate: string
    
    @Column("bigint",{unique:true})
    nDni: number
    
    @OneToOne(()=> Credential)
    @JoinColumn()
    credentialIs: Credential

    @OneToMany(() => Appointment, appointment => appointment.user, {nullable:true})
    @JoinColumn({name:"user_id"})
    appointments: Appointment[];
}
