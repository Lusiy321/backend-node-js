import {ApiProperty} from "@nestjs/swagger";
import {IsNumber, IsString} from "class-validator";

export class CreatePostDto {
    @ApiProperty({example: 'Моя статья', description: 'Заголовок'})
    @IsString({message: 'Должно быть строкой'})
    readonly title: string;
    @ApiProperty({example: 'Мой текст', description: 'текст'})
    @IsString({message: 'Должно быть строкой'})
    readonly content: string;
    @ApiProperty({example: '1', description: 'ID'})
    @IsNumber({}, {message: "Должно быть числом"})
    readonly userId: number;
}



