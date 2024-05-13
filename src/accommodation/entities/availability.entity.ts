import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Accommodation } from "./accommodation.entity";

@Entity()
export class Availability {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Accommodation, accommodation => accommodation.availability)
    accommodation: Accommodation;

    @Column()
    startDate: Date;

    @Column()
    endDate: Date;

    @Column()
    price: number;

}