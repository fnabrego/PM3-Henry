import { Column, Entity,  JoinColumn,  ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity({
    name: "appointments"
})
export class Appointment {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    date: string

    @Column()
    time: string
    
    @Column({default:"active"})
    status: string
    
    @ManyToOne(() => User, user =>user.id)
    @JoinColumn({name:"user_id"})
    user: User;
}
// @ManyToOne(() => Category)
// @JoinColumn({ name: "category_id" })
// category: Category;