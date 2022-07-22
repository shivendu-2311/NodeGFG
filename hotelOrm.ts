import { Field, ObjectType } from "type-graphql";
import {BaseEntity, Column , Entity, PrimaryGeneratedColumn} from "typeorm";

@ObjectType()
@Entity()
export class hotels extends BaseEntity
{   @Field(() => String)
    @Column()
    name: string;
    @Field(() => String)
    @Column()
    cuisines:string;
    @Field(() => String)
    @Column()
    featured_image: string;
    @Field(() => String)
    @Column()
    @PrimaryGeneratedColumn()
    id:string;
}