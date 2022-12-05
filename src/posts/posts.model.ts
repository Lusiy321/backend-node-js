import {BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {User} from "../users/users.model";

interface PostCreationAttrs {
    title: string;
    content: string;
    userId: number;
    image: string;
}

@Table({tableName: 'posts'})
export class Posts extends Model<Posts, PostCreationAttrs> {

    @ApiProperty({example: '1', description: 'Post Id'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'Some text', description: 'Post title'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    title: string;

    @ApiProperty({example: 'Some more text', description: 'Post content'})
    @Column({type: DataType.STRING, allowNull: false})
    content: string;
    
    @ApiProperty({example: './', description: 'Add image'})
    @Column({type: DataType.STRING})
    image: string;

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    userId: number;

    @BelongsTo(() => User)
    author: User

}
