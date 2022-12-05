import {ApiProperty} from "@nestjs/swagger";
// import { IsNumber, IsString } from "class-validator";


export class CreatePostDto {

    @ApiProperty({example: 'Some text', description: 'Title'})
    // @IsString({message: 'Moust be string'})
    readonly title: string;

    @ApiProperty({example: 'Some more text', description: 'Content'})
    // @IsString({message: 'Moust be string'})
    readonly content: string;

    @ApiProperty({example: '1', description: 'ID'})
    // @IsNumber({}, {message: "Moust be number"})
    readonly userId: number;
}



